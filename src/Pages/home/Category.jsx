import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const companyLogo = [
  { id: 1, img: "/public/images/company/brand_1.png" },
  { id: 2, img: "/public/images/company/brand_2.png" },
  { id: 3, img: "/public/images/company/brand_3.png" },
  { id: 4, img: "/public/images/company/brand_4.png" },
  { id: 5, img: "/public/images/company/brand_5.png" },
];
const Category = () => {
  const { t } = useTranslation();
  return (
    <div className="max-x-screen-2xl mx-auto container xl:px-28 px-4 py-28">
      <div className="flex items-center justify-around flex-wrap gap-4 py-5">
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
        <p className="font-semibold uppercase md:rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex">
          {t('category.explore')}
        </p>
        <div>
          <Link to="/">
            <img
              src="/public/images/category/category_1.png"
              alt=""
              className="w-full hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-2">
            <Link to="/">
              <img
                src="/public/images/category/category_2.png"
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/public/images/category/category_3.png"
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/public/images/category/category_4.png"
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <Link to="/">
              <img
                src="/public/images/category/category_5.png"
                alt=""
                className="w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
