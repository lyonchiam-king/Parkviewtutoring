import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Ensure data directory exists for CSV / JSON spreadsheet persistence
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const csvPath = path.join(dataDir, "enquiries.csv");
  const jsonPath = path.join(dataDir, "enquiries.json");

  // Initialize CSV with header row if it doesn't exist
  if (!fs.existsSync(csvPath)) {
    const csvHeader = "Timestamp,ID,Parent Name,Student Name,Subject,Year Group,Contact Number,Email,Preferred Days,Notes\n";
    fs.writeFileSync(csvPath, csvHeader, "utf8");
  }

  // Helper to read enquiries JSON
  const getEnquiries = () => {
    if (!fs.existsSync(jsonPath)) return [];
    try {
      return JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    } catch {
      return [];
    }
  };

  // Helper to save enquiries JSON & append CSV
  const saveEnquiry = (enquiryData: any) => {
    const enquiries = getEnquiries();
    const timestamp = new Date().toISOString();
    const newEnquiry = {
      id: `ENQ-${Date.now().toString(36).toUpperCase()}`,
      timestamp,
      ...enquiryData,
    };
    enquiries.unshift(newEnquiry);
    fs.writeFileSync(jsonPath, JSON.stringify(enquiries, null, 2), "utf8");

    // Format row for CSV spreadsheet
    const escapeCsv = (str: string) => `"${(str || "").replace(/"/g, '""')}"`;
    const csvRow = [
      escapeCsv(newEnquiry.timestamp),
      escapeCsv(newEnquiry.id),
      escapeCsv(newEnquiry.parentName),
      escapeCsv(newEnquiry.studentName),
      escapeCsv(newEnquiry.subject),
      escapeCsv(`Year ${newEnquiry.yearGroup}`),
      escapeCsv(newEnquiry.contactNumber),
      escapeCsv(newEnquiry.email),
      escapeCsv(newEnquiry.preferredDays),
      escapeCsv(newEnquiry.additionalNotes),
    ].join(",") + "\n";

    fs.appendFileSync(csvPath, csvRow, "utf8");
    return newEnquiry;
  };

  // API Endpoint: Submit Enquiry (Google Sheets Connector CSV sync backend)
  app.post("/api/enquiries", (req, res) => {
    try {
      const { parentName, studentName, subject, yearGroup, contactNumber } = req.body;
      if (!parentName || !contactNumber) {
        return res.status(400).json({ error: "Parent name and contact number are required." });
      }

      const saved = saveEnquiry(req.body);
      console.log(`[Park View Tutoring] Saved new enquiry ${saved.id} for ${saved.parentName}`);
      return res.json({ success: true, enquiry: saved });
    } catch (err: any) {
      console.error("Error saving enquiry:", err);
      return res.status(500).json({ error: "Failed to process enquiry." });
    }
  });

  // API Endpoint: Get JSON enquiries list
  app.get("/api/enquiries", (_req, res) => {
    return res.json({ enquiries: getEnquiries() });
  });

  // API Endpoint: Download CSV Spreadsheet
  app.get("/api/enquiries/csv", (_req, res) => {
    if (!fs.existsSync(csvPath)) {
      return res.status(404).send("No spreadsheet data available yet.");
    }
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="Park_View_Tutoring_Enquiries.csv"');
    return res.sendFile(csvPath);
  });

  // Vite middleware for development vs production static assets
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Park View Tutoring] Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
