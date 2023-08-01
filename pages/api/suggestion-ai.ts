// pages/api/ai-suggestions.js

import type { NextApiRequest, NextApiResponse } from "next";

interface DataType {
  action: string;
  section: string;
  phrase: string | string[] | undefined;
  aisearch: false;
}

interface ErrorResponse {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataType | ErrorResponse>
) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ error: "Method Not Allowed" } as ErrorResponse);
  }

  const { phrase } = req.query;

  const searchData = {
    action: "resume_builder_ai",
    section: "profession",
    phrase,
    aisearch: false,
  };

  try {
    const response = await fetch(
      "https://app.resumebuilder.com/wp-admin/admin-ajax.php?" +
        new URLSearchParams(searchData).toString()
    );

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return res
      .status(500)
      .json({ error: "Something went wrong" } as ErrorResponse);
  }
}
