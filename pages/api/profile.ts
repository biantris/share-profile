// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    {
      name: "Beatriz Oliveira",
      social: {
        twitter: "@biantris_",
        instagram: "https://instagram.com/biantrisdev",
        linkedin: "https://linkedin.com/beatriiz-oliveiraa",
        github: "https://github.com/biantris",
      },
    },
    {
      name: "Emanuel Ferreira",
      social: {
        twitter: "@manelferreira_",
        linkedin: "https://linkedin.com/emanuelcferreira",
        github: "https://github.com/EmanuelCampos",
      },
    },
  ]);
}
