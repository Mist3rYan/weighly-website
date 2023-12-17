import { useTranslation } from 'react-i18next';
import Header from "../components/Header";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="bg-secondary-color ">
      <Header />
      <section className="flex justify-center h-screen bg-secondary-color ">
        <div className="fixed top-10 left-2/3 transform -translate-x-2/3 opacity-70  z-10">
          <div className="rounded-full bg-tertiary-color w-[500px] h-[500px] filter blur-3xl brightness-125 saturate-150"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center max-w-screen-xl  relative z-20">
          <div className="flex flex-col gap-5  items-center md:items-start md:w-1/2 text-left ml-6">
            <img
              src="/images/2.png"
              alt="vague"
              width={300}
              height={100}
              className="my-5 max-w-full"
            />
            <h1 className="text-primary-color md:text-6xl font-bold">
              Weighly
            </h1>
            <h2 className="text-primary-color md:text-6xl font-bold">
              {t('Weight_tracking')}
            </h2>
            <h3 className="text-primary-color md:text-3xl font-bold">
            {t('Everything_starts_here')}
            </h3>
            <a href="/contact">
              <img
                src="/images/google-badge.png"
                alt="Badge Android"
                width={200}
                className="my-5 max-w-full"
              />
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end md:w-1/2 w-full">
            <img src="/images/1.png" alt="Img1" className="md:w-10/12 w-1/3" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
