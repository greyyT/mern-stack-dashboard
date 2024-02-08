import { Request, Response } from 'express';
import Product from '../models/Product';
import ProductStat from '../models/ProductStat';

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
