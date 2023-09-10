import React, { useEffect, useContext, useCallback } from 'react';
import Category from './Category/Category';
import Banner from './Banner/Banner';
import './Home.scss';
import Products from '../Products/Products';
import { fetchDataFromApi } from '../../utils/api';
import { Context } from '../../utils/context';

const Home = () => {
  const { products, setProducts, categories, setCategories } =
    useContext(Context);

  console.log(888, process.env.REACT_APP_STRIPE_APP_DEV_URL);

  const getProducts = useCallback(() => {
    fetchDataFromApi('/api/products?populate=*').then((res) => {
      setProducts(res);
    });
  }, [setProducts]);

  const getCategories = useCallback(() => {
    fetchDataFromApi('/api/categories?populate=*').then((res) => {
      setCategories(res);
    });
  }, [setCategories]);

  useEffect(() => {
    getProducts();
    getCategories();
  }, [getProducts, getCategories]);

  return (
    <div className='home'>
      <Banner />
      <div className='main-content'>
        <div className='layout'>
          <Category categories={categories} />
          <Products headingText='Popular Products' products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
