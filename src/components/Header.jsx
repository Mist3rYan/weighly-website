import { useTranslation } from 'react-i18next';

function Header () {
    const { t } = useTranslation();
  return (
            <header className="flex items-center w-full h-20 bg-secondary-color">
            <div className="w-full max-w-screen-xl px-4 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img
                            src="/images/balance.svg"
                            alt="Logo Weighly"
                            width={30}
                            height={30} // Ajout de la hauteur de l'image
                        />
                        <span className="text-primary-color text-lg md:text-2xl font-bold gap-3">
                            <a href="/">Weighly</a>
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-5">
                        <ul className="flex items-center text-primary-color text-base md:text-xl font-bold gap-5">
                            <li>
                                <a href="/">{t('Home')}</a>
                            </li>
                            <li>
                                <a href="/description">Description</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <span className="text-primary-color text-base md:text-xl font-bold gap-3">
                        <a href="/notices">{t('Legal')}</a>
                    </span>
                </div>
            </div>
        </header>
  )
}
export default Header;