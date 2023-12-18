import Header from "../components/Header";
import { useTranslation,Trans } from 'react-i18next';

function Notices() {
  const { t } = useTranslation();
    return (
        <div className="bg-secondary-color">
        <Header />
        <section className="flex justify-center bg-secondary-color">
      <div
        className="flex flex-col md:flex-row items-center max-w-screen-xl"
        style={{
          backgroundImage: "url(./images/3.png)",
          backgroundSize: "contain", // ajustez selon vos besoins (peut également essayer "100% 100%")
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center", // assurez-vous que l'image est centrée
          width: "100%",
          height: "100%",
        }}
      >
      <div className="flex flex-col justify-around bg-black w-full p-5 bg-opacity-50 my-5">
        <div className="flex flex-row items-center justify-center text-primary-color font-bold md:text-6xl mb-5">
          <img src="./images/document.png" alt="Document" width={90} height={90}/>
          <span>{t('Legal')}</span>
        </div>
        <p className="flex justify-center text-primary-color  text-base md:text-xl font-bold mt-5">
          <Trans i18nKey="txt_legal"></Trans>
        </p>
      </div>
      </div>
    </section>
        </div>
    )
}

export default Notices;