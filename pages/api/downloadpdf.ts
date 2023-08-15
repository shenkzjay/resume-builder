import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import axios from "axios";

const SavePDF = async (url: string) => {
  // const browser = await puppeteer.launch({ headless: "new" });

  // const browser = await puppeteer.launch({
  //   executablePath: "/usr/bin/chromium-browser",
  //   headless: false,
  // });

  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle0",
  });

  const result = await page.pdf({
    format: "a4",
  });

  await browser.close();

  return result;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  res.setHeader("Content-Disposition", `attachement; filename="resume.pdf"`);
  res.setHeader("Content-Type", "application/pdf");

  const pdf = await SavePDF(url as string);

  return res.send(pdf);
}
