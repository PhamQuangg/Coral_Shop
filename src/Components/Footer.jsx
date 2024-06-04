import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <footer>
            <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4'>
                <div className='mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8'>
                    <div className='md:w-[400px]'>
                        <Link to="/">
                            <img src="/public/logo.png" alt="" />
                        </Link>
                        <p className='my-8 text-Black/75'>
                            {t('footer.aboutUsContent')}
                        </p>
                        <div className='flex items-center gap-6'>
                            <FaFacebook className='w-5 h-5 cursor-pointer hover:text-orange-500'/>
                            <FaGithub className='w-5 h-5 cursor-pointer hover:text-orange-500'/>
                            <FaLinkedin className='w-5 h-5 cursor-pointer hover:text-orange-500'/>
                            <FaInstagram className='w-5 h-5 cursor-pointer hover:text-orange-500'/>
                        </div>
                    </div>

                    <div className=' text-black'>
                        <h4 className=' font-semibold mb-3'>{t('footer.catalog')}</h4>
                        <div className='space-y-2'>
                            <Link to="/" className='text-sm block hover:text-orange-500'>
                                {t('footer.necklaces')}
                            </Link>
                            <Link to="/" className='text-sm block hover:text-orange-500'>
                                {t('footer.hoodies')}
                            </Link>
                            <Link to="/" className='text-sm block hover:text-orange-500'>
                                {t('footer.jewelryBox')}
                            </Link>
                            <Link to="/" className='text-sm block hover:text-orange-500'>
                                {t('footer.tShirt')}
                            </Link>
                            <Link to="/" className='text-sm block hover:text-orange-500'>
                                {t('footer.jacket')}
                            </Link>
                        </div>
                    </div>
                    <div className='text-black'>
                        <h4 className=' font-semibold mb-3'>{t('footer.customerServices')}</h4>
                        <div className='space-y-2'>
                            <Link to="/" className='text-sm block hover:text-orange-500'>
                                {t('footer.contactUs')}
                            </Link>
                            <Link to="/" className='text-sm block hover:text-orange-500'>
                                {t('footer.trackYourOrder')}
                            </Link>
                            <Link to="/" className='text-sm block hover:text-orange-500'>
                                {t('footer.productCareRepair')}
                            </Link>
                            <Link to="/" className='text-sm block hover:text-orange-500'>
                                {t('footer.bookAnAppointment')}
                            </Link>
                            <Link to="/" className='text-sm block hover:text-orange-500'>
                                {t('footer.shippingReturns')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black'>
                <p className='text-white text-center items-center py-3'>{t('footer.copyright', { currentYear })}</p>
            </div>
        </footer>
    );
};

export default Footer;
