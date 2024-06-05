import React , { useRef, useState }from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import emailjs from "@emailjs/browser";


const Newletters = () => {
    const form = useRef(null);
    const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation();
  const sendEmail = (e) => {
    e.preventDefault();
    
    if (form.current) { 
      emailjs.sendForm('service_ynj084p', 'template_06tq9cq', form.current, 'LvF34HZKj0mMyJJ-h')
        .then((result) => {
          setSuccessMessage(t('orther.successMessage'));
          setErrorMessage('');
          if (form.current) {
            form.current.reset(); 
          }
        }, (error) => {
          setErrorMessage(t('orther.errorMessage'));
          setSuccessMessage('');
        });
    }
  };
  return (
    <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16'>
        <h2 className='title mb-8'>{t('orther.followIg')}</h2>
        <div className='flex flex-wrap gap-4 items-center justify-center mb-20'>
            <Link to="/">
                <img src="/public/images/instagram/insta_1.png" alt="" />
            </Link>
            <Link to="/">
                <img src="/public/images/instagram/insta_2.png" alt="" />
            </Link>
            <Link to="/">
                <img src="/public/images/instagram/insta_3.png" alt="" />
            </Link>
            <Link to="/">
                <img src="/public/images/instagram/insta_4.png" alt="" />
            </Link>
            <Link to="/">
                <img src="/public/images/instagram/insta_5.png" alt="" />
            </Link>
            <Link to="/">
                <img src="/public/images/instagram/insta_6.png" alt="" />
            </Link>
        </div>
        <div>
        <h2 className='title mb-8'>{t('orther.mail')}</h2>
        <form ref={form} onSubmit={sendEmail} className="md:w-1/2 mx-auto text-center">
          <input 
            type="text" 
            name="name" 
            required
            placeholder={t('orther.yourName')} 
            className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-orange-500"
          />

          <input 
            type="email" 
            name="email" 
            required
            placeholder={t('orther.yourEmail')} 
            className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-orange-500"
          />

          <textarea 
            name="message" 
            placeholder={t('orther.message')}
            required
            className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-orange-500 h-28"
          />

          <input 
            type="submit" 
            value={t('orther.button')} 
            className="bg-black hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md cursor-pointer"
          />

          {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </form>
      </div>
    </div>
  )
}

export default Newletters