import dbConnect from '@/db/dbConnect';
import TestModel from '@/db/models/TestModel';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      const testModel = await TestModel.findById(id);
      res.status(201).send(testModel);
      break;

    case 'PATCH':
      const updatedTestModel = await TestModel.findByIdAndUpdate(id, req.body, { new: true });
      res.send(updatedTestModel);
      break;

    case 'DELETE':
      await TestModel.findByIdAndDelete(id);
      res.status(204).send();
      break;

    default:
      res.status(404).send();
  }
}
