import mongoose from 'mongoose';
import Transaction from '../../../Models/Transaction'; // Path to your transaction model
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
// Connect to your MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
      try {
        if (session) {
          console.log(req.query);
          const booking = await Transaction.findById(req.query.id)
          console.log(booking);
          res.status(200).json({ success: true, data: booking })
        }
        else {
          res.send({
            error: "You must be sign in to view the protected content on this page.",
          })
        }
      } catch (error) {
        res.status(400).json({ success: false })
      }
}