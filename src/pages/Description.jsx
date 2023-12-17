import Header from "../components/Header";
import { useTranslation } from 'react-i18next';

function Descriptions() {
  const { t } = useTranslation();
    return (
        <div className="bg-secondary-color ">
        <Header />
        <section className="flex justify-center h-screen bg-secondary-color">
      <div
        className="flex flex-col items-center justify-around max-w-screen-xl"
        style={{
          backgroundImage: "url(/images/3.png)", // ou "url(/images/bg.jpg)
          backgroundSize: "contain", // ajustez selon vos besoins (peut également essayer "100% 100%")
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center", // assurez-vous que l'image est centrée
          width: "100%",
          height: "100%",
        }}
      >
        <div className="flex flex-row text-primary-color font-bold md:text-6xl">
        <span>{t('Everything_starts_here')}</span>
      </div>
        <div className="flex flex-row justify-center gap-10 px-5">
          <div className="flex flex-col bg-black w-1/3 p-5 bg-opacity-50">
          <div className="rounded-full p-2 flex items-center justify-center mx-auto h-20 w-20" style={{ background: 'linear-gradient(to right, #EE798A, #EA4335)' }}>
          <img
            src="/images/heart-rate.png"
            alt="heart"
            color="primary-color"
            width={50}
            height={50}
            className="mx-auto my-auto"
            />
          </div>
            <h1 className="text-primary-color md:text-3xl font-bold mt-9">{t('Health')}</h1>
            <p className="text-primary-color md:text-xl font-semi-bold mt-2">{t('txt_health')}</p>
          </div>
          <div className="flex flex-col bg-black w-1/3 p-5 bg-opacity-50">
          <div className="rounded-full p-2 flex items-center justify-center mx-auto h-20 w-20" style={{ background: 'linear-gradient(to right, #EE798A, #EA4335)' }}>
          <img
            src="/images/search.png"
            alt="search"
            color="primary-color"
            width={40}
            height={40}
            className="mx-auto my-auto"
            />
            </div>
            <h1 className="text-primary-color md:text-3xl font-bold mt-9">{t('Monitor')}</h1>
            <p className="text-primary-color md:text-xl font-semi-bold mt-2">{t('txt_monitor')}</p>
          </div>
          <div className="flex flex-col bg-black w-1/3 p-5 bg-opacity-50">
          <div className="rounded-full p-2 flex items-center justify-center mx-auto h-20 w-20" style={{ background: 'linear-gradient(to right, #EE798A, #EA4335)' }}>
          <img
            src="/images/pen.png"
            alt="pen"
            width={40}
            height={40}
            className="text-white mx-auto my-auto"
            />
            </div>
            <h1 className="text-primary-color md:text-3xl font-bold mt-9">{t('Configure')}</h1>
            <p className="text-primary-color md:text-xl font-semi-bold mt-2">{t('txt_configure')}</p>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}

export default Descriptions;