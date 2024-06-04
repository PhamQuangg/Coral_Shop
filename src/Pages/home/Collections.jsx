import React from "react";
import { useTranslation } from 'react-i18next';

const Collections = () => {
  const { t } = useTranslation();
  return (
    <div className='bg-[url("/images/bg-collection.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20'>
      <div className="h-[580px] flex justify-between md:flex-row items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <img src="/images/logo_zara.png" alt="" />
          <p className="text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]">
          {t('zara.content')}
          </p>
          <button className="px-6 py-2 bg-white text-black rounded-sm font-semibold"> {t('zara.button')}</button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
