import User from '../models/User';
import { Request, Response } from 'express';

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select('-password');

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
