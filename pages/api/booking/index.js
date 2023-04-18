import mongoose from 'mongoose';
import Transaction from '../../../Models/Transaction.js'; // Path to your transaction model

// Connect to your MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

async function handler(req, res) {
  if (req.method === 'POST') {
    const transactionData = req.body;

    try {
      const newTransaction = new Transaction(transactionData);
      const savedTransaction = await newTransaction.save();
      res.status(200).json(savedTransaction);
    } catch (error) {
      res.status(500).json({ message: 'Failed to save transaction', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default handler;
