import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";
import axios from "axios";

export default async function handlerPdf(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const browser = await puppeteer.connect({
      browserWSEndpoint: `wss://chrome.browserless.io?token=ae343fea-661c-4dbd-a931-7759461a09c5`,
    });
    const page = await browser.newPage();

    await page.goto(`http://localhost:3000`);
    await page.pdf({
      path: `./sample.pdf`,
      format: `A4`,
    });

    await browser.close();

    res.status(200).json({ message: "PDF generated successfully" });
  } catch (error: any) {
    res.status(400).json({ error: error?.message });
  }
}

// export default DownloadPDF;

// const URL = "https://react.dev/";

// const Main = async () => {
//   const browser = await puppeteer.connect({
//     browserWSEndpoint: `wss://chrome.browserless.io`,
//   });
//   const page = await browser.newPage();
//   await page.goto(URL);

//   return page.pdf({
//     format: "A5",
//   });
// };

// export default Main;
