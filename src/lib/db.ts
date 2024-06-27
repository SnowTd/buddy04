import mongoose from 'mongoose';

const connection: { isConnected?: number } = {};

async function connectdb() {
  if (connection.isConnected) {
    return;
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not set');
  }
  const db = await mongoose.connect(process.env.MONGO_URI);
  connection.isConnected = db.connections[0].readyState;
}

export default connectdb;
