import { useEffect, useState } from 'react';
import { getProducts } from '../api/api';
import { IProduct } from '../common/types';

export const useFetch = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await getProducts();
        const categories = Array.from(new Set(res.map((r) => r.category)));
        setProducts(res);
        setCategories(categories);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, categories, loading, error };
};
