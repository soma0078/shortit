import dbConnect from '@/db/dbConnect';
import QRCode from '@/db/models/QRCode';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      const qrcodes = await QRCode.find();
      res.send(qrcodes);
      break;

    case 'POST':
      const newQRCode = await QRCode.create(req.body);
      res.status(201).send(newQRCode);
      break;

    default:
      res.status(404).send();
  }
}
