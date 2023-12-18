import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  const Links = [
    { name: t('Home'), path: '/' },
    { name: 'Description', path: '/description' },
    { name: 'Contact', path: '/contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center w-full h-20 bg-secondary-color relative z-50 md:relative md:z-10">
      <div className="w-full max-w-screen-xl px-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <img
              src="/images/balance.svg"
              alt="Logo Weighly"
              width={30}
              height={30}
            />
            <span className="text-primary-color text-lg md:text-2xl font-bold gap-3">
              <a href="/">Weighly</a>
            </span>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className='w-8 h-8 absolute right-16 top-6 cursor:pointer md:hidden'
            >
              {isOpen ? (
                <img src="/images/close.png" alt="Close Weighly" />
              ) : (
                <img src="/images/menu.png" alt="Menu Weighly" />
              )}
            </div>
          </div>
          <div
            className={`md:hidden ${
              isOpen ? 'block' : 'hidden'
            } absolute top-20 left-0 right-0 bg-secondary-color`}
          >
            <ul className="flex flex-col items-center text-primary-color text-base md:text-xl font-bold gap-5 p-4">
              {Links.map((link, index) => (
                <li key={index}>
                  <a href={link.path} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            <li><a href="/notices">{t('Legal')}</a></li>
            </ul>
          </div>
          <div
            className={`hidden md:flex md:items-center gap-5 ${
              isOpen ? 'top-12' : 'top-[-490px]'
            }`}
          >
            <ul className="flex items-center text-primary-color text-base md:text-xl font-bold gap-5">
              {Links.map((link, index) => (
                <li key={index}>
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <span className="hidden md:flex text-primary-color text-base md:text-xl font-bold gap-3">
            <a href="/notices">{t('Legal')}</a>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
