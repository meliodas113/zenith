import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import './Footer.scss';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payment from '../../assets/payments.png';
import { fetchDataFromApi } from '../../utils/api';

const Footer = () => {
  const [categories, setCategories] = useState();
  const navigate = useNavigate();

  const getCategories = useCallback(() => {
    fetchDataFromApi('/api/categories?populate=*').then((res) => {
      setCategories(res);
    });
  }, [setCategories]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='col'>
          <div className='title'>About</div>
          <div className='text'>
            Where Gen Z shops with flair. Experience curated products, sleek
            design, and seamless innovation tailored to the tech-savvy youth.
            Discover trends and possibilities like never before.
          </div>
        </div>
        <div className='col'>
          <div className='title'>Contact</div>
          <div className='c-item'>
            <FaLocationArrow />
            <div className='text'>
              221b Baker Street, Marylebone, London NW1 6XE.
            </div>
          </div>
          <div className='c-item'>
            <FaMobileAlt />
            <div className='text'>Phone: 0471 272 0261</div>
          </div>
          <div className='c-item'>
            <FaEnvelope />
            <div className='text'>Email: store@zenith.com</div>
          </div>
        </div>
        <div className='col'>
          <div className='title'>Categories</div>
          {categories?.data?.map((item) => (
            <span
              className='text v2'
              onClick={() => navigate(`/category/${item.id}`)}
            >
              {item.attributes.title}
            </span>
          ))}
        </div>
        <div className='col'>
          <div className='title'>Pages</div>
          <span className='text v2' onClick={() => navigate('/')}>
            Home
          </span>
          <span className='text v2' onClick={() => navigate('/about')}>
            About
          </span>
          <span className='text v2'>Privacy Policy</span>
          <span className='text v2'>Returns</span>
          <span className='text v2'>Terms & Conditions</span>
          <span className='text v2'>Contact Us</span>
        </div>
      </div>
      <div className='bottom-bar'>
        <div className='bottom-bar-content'>
          <span className='text'>
            ZENITH 2023 CREATED BY ZENITH. PREMIUM E-COMMERCE SOLUTIONS.
          </span>
          <img src={Payment} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
