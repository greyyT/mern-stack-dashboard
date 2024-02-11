import { Request, Response } from 'express';
import { getCountryISO3 } from '../utils/country-iso-2-to-3';
import Product from '../models/Product';
import ProductStat from '../models/ProductStat';
import User from '../models/User';
import Transaction from '../models/Transaction';

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

export const getTransactions = async (req: Request, res: Response) => {
  try {
    // sort schema: { "field": "userId", "sort": "desc" }
    const { page = 1, pageSize = 20, sort = null, search = '' } = req.query;

    let sortFormatted;

    // format sort to this schema: { userId: -1 }
    if (!Boolean(sort)) {
      sortFormatted = {};
    } else {
      const sortParsed = JSON.parse(sort as string);
      sortFormatted = {
        [sortParsed.field]: sortParsed.sort === 'asc' ? 1 : -1,
      };
    }

    const transactions = await Transaction.find({
      $or: [
        { cost: { $regex: new RegExp(search as string, 'i') } },
        { userId: { $regex: new RegExp(search as string, 'i') } },
      ],
    })
      .sort(sortFormatted as any)
      .skip(Number(page) * Number(pageSize))
      .limit(Number(pageSize));

    const total = await Transaction.countDocuments({
      $or: [
        { cost: { $regex: new RegExp(search as string, 'i') } },
        { userId: { $regex: new RegExp(search as string, 'i') } },
      ],
    });

    res.status(200).json({
      transactions,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const getGeography = async (req: Request, res: Response) => {
  try {
    const users = await User.find();

    const mappedLocations = users.reduce((acc: { [key: string]: any }, { country }) => {
      const countryISO3 = getCountryISO3(country as string);

      if (!acc.hasOwnProperty(countryISO3)) {
        acc[countryISO3] = 0;
      }

      acc[countryISO3]++;
      return acc;
    }, {});

    const formattedLocations = Object.entries(mappedLocations).map(([country, count]) => {
      return { id: country, value: count };
    });

    res.status(200).json(formattedLocations);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
