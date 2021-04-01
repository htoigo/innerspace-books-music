import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // CAUTION: The following line removes ALL documents from User collection!
    // This is only to be used when initially seeding the database! After doing
    // so, comment out the User.remove command.
    // await User.remove({});

    const createdUsers = await User.insertMany(data.users);
    res.send( {createdUsers} );
  })
);

export default userRouter;
