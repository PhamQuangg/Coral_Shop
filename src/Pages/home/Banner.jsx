import React from "react";
import bannerImg from "/images/image-banner.png";
import { FaShoppingBag } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primaryBG py-12 xl:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        <div className="md:w-1/2">
          <img src={bannerImg} alt="Banner" />
        </div>

        <div className="md:w-1/2 ">
          <h1 className="text-5xl font-light mb-5">{t('banner.title')}</h1>
          <p className="text-xl mb-7">{t('banner.description')}</p>
          <button className="bg-black hover:bg-orange-600 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2">
            <FaShoppingBag className="inline-flex" />
            {t('banner.buttonText')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
