import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Banner.scss';
import BannerImg from '../../../assets/banner-img.png';

const Banner = () => {
  const navigate = useNavigate();

  const spanRef = useRef([]);
  const banner = ['Z', 'e', 'n', 'i', 't', 'h'];
  useEffect(() => {
    console.log(spanRef);
  }, []);
  const handleClickScroll = () => {
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='hero-banner'>
      <div className='content'>
        <div className='text-content'>
          <h1>
            {banner.map((item) => {
              return <span>{item}</span>;
            })}
          </h1>
          <p>
            Where Gen Z shops with flair. Experience curated products, sleek
            design, and seamless innovation tailored to the tech-savvy youth.
            Discover trends and possibilities like never before.
          </p>
          <div className='ctas'>
            <div className='banner-cta' onClick={() => navigate('/about')}>
              Read More
            </div>
            <div className='banner-cta' onClick={handleClickScroll}>
              Shop Now
            </div>
          </div>
        </div>
        <img className='banner-img' src={BannerImg} alt='' />
      </div>
    </div>
  );
};

export default Banner;
