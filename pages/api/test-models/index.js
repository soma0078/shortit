import dbConnect from '@/db/dbConnect';
import TestModel from '@/db/models/TestModel';

export default async function handler(req, res) {
  await dbConnect();
  // 데이터 베이스 연동 확인 => 1 출력됨
  // console.log(mongoose.connection.readyState);

  switch (req.method) {
    // 모든 도큐먼트 확인
    case 'GET':
      const testModels = await TestModel.find();
      res.status(201).send(testModels);
      break;

    // POST
    case 'POST':
      const newTestModel = await TestModel.create(req.body);
      res.send(newTestModel);
      break;

    default:
      res.status(404).send();
  }
}
