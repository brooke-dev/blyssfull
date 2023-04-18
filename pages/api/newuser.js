import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)

  const { method } = req;
  if (method === 'POST') {
    try {
      console.log(session);
      console.log(req);
      if (session) {
        let User = await mongoose.connection.db
        .collection("users")
        .findOne({ _id: new mongoose.Types.ObjectId(session.id) }, (err, user) => {
          if (err) {
            console.log(err);
          }
        })
        console.log('USER >>>>>> ' + JSON.parse(JSON.stringify(User)))
        if (User?.newUser) {
          session.newUser = false;
          console.log('user new user save')
          await mongoose.connection.db
          .collection("users")
          .updateOne({ _id: new mongoose.Types.ObjectId(session.id) }, { $set: { newUser: false, firstName: JSON.parse(req.body).firstName, lastName: JSON.parse(req.body).lastName } });
           res.status(200).json({whatever: 'yo'});
        } else {
          console.log("logging user >>>>>" + User);
          res.status(201);
        }
      } else {
        res.status(401);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: "false", error: error});
    }
  }
  res.end();
}
