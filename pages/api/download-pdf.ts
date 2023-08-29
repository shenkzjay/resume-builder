import path from "path";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pdfPath = path.join(process.cwd(), "resume.pdf");
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `attachment; filename=resume.pdf`);
  fs.createReadStream(pdfPath).pipe(res);
}
