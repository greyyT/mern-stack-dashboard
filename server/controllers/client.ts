import { Request, Response } from 'express';
import Product from '../models/Product';
import ProductStat from '../models/ProductStat';
import User from '../models/User';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();

    const productsWithStats = await Promise.all(
      products.map(async (product: any) => {
        const stat = await ProductStat.findOne({
          productId: product._id,
        });

        return {
          ...product._doc,
          stat,
        };
      }),
    );

    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await User.find({ role: 'user' }).select('-password');

    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
