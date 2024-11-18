import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain');
  res.send(`
    User-agent: *
    Allow: /
    Sitemap: https://esennet.vercel.app/sitemap.xml
  `);
}
