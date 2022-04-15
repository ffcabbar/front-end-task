import { data } from './data';
import { IProduct } from '../common/types';

// pseudo API
export const getProducts = (): Promise<IProduct[]> => {
  return new Promise((resolve, reject) => {
    if (!data) {
      return setTimeout(() => reject(new Error('data not found')), 1000);
    }
    setTimeout(() => resolve(data), 1000);
  });
};
