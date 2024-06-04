import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  const bestSeller = products.filter(item => item.status === "Best Sellers");

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="text-center">
        <h2 className="title">{t('bestseller.title')}</h2>
        <p className="text-black/75 capitalize md:w-2/3 mx-auto mb-8">
          {t('bestseller.description')}
        </p>
      </div>

      <div className="mb-16">
        {isLoading ? (
          <p>{t('bestseller.loading')}</p>
        ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{ 
                640:{
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768:{
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024:{
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
             }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {bestSeller.map(product => (
              <SwiperSlide key={product.id}> 
                <Link to={`/shop/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="mx-auto w-full hover:scale-105 transition-all"
                  />
                </Link>
                <div className="mt-4 px-4">
                  <h4 className="text-base font-semibold mb-2">{product.title}</h4>
                  <div className="flex justify-between">
                    <p className="text-black/50">{product.category}</p>
                    <p className="font-semibold">${product.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
