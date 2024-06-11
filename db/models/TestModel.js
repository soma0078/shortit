import mongoose from 'mongoose';

const testModelSchema = new mongoose.Schema(
  {
    title: { type: String, default: '' },
    url: { type: String, default: '' },
  },
  {
    timestamps: true,
  }
);

const TestModel = mongoose.models['TestModel'] || mongoose.model('TestModel', testModelSchema);

export default TestModel;
