import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import axios from "axios";
import path from "path";
import fs from "fs";

// const SavePDF = async (url: string) => {
//   // const browser = await puppeteer.launch({ headless: "new" });

//   const browser = await puppeteer.launch({
//     executablePath:
//       "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
//     headless: false,
//   });

//   // const browser = await puppeteer.launch({
//   //   headless: false,
//   //   args: ["--no-sandbox"],
//   // });

//   const page = await browser.newPage();

//   await page.goto(url, {
//     waitUntil: "networkidle0",
//   });

//   const result = await page.pdf({
//     format: "a4",
//   });

//   await browser.close();

//   return result;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const templateHTML = req.body.templateComponent;

  console.log("template", templateHTML);

  const browser = await puppeteer.launch({
    headless: "new",
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const page = await browser.newPage();
  await page.setContent(templateHTML);

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  const pdfPath = path.join(process.cwd(), "resume.pdf");
  fs.writeFileSync(pdfPath, pdfBuffer);

  res.json({ pdfUrl: `/api/download-pdf` });
}

// import puppeteer from "puppeteer";
// import ReactDOMServer from "react-dom/server";
// import { NextApiHandler } from "next";
// import { templateType } from "@/components/templates";

// const generatePDF: NextApiHandler = async (req, res) => {
//   try {
//     const templateHTML = req.body.templateComponent;

//     const browser = await puppeteer.launch({
//       headless: "new",
//       executablePath:
//         "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
//     });
//     const page = await browser.newPage();

//     // const TemplateComponent = eval(templateHTML) as templateType["component"];
//     const template = ReactDOMServer.renderToString(templateHTML);

//     await page.setContent(template);

//     const pdfBuffer = await page.pdf({
//       format: "A4",
//       printBackground: true,
//     });

//     await browser.close();

//     res.setHeader("Content-Type", "application/pdf");
//     res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");
//     res.send(pdfBuffer);
//   } catch (error) {
//     console.error("Error generating PDF:", error);
//     res.status(500).json({ error: "Failed to generate PDF" });
//   }
// };

// export default generatePDF;
