//src/api/hooks-api/submit-form.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { userName, email, phone, message } = req.body;

    // Imprime os dados no console do servidor
    console.log("Dados recebidos:", {
      userName,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    res.status(200).json({
      success: true,
      message: "Dados recebidos e impressos no console",
    });
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
