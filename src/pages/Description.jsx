import Header from "../components/Header";
import { useTranslation } from "react-i18next";

function Descriptions() {
  const { t } = useTranslation();
  return (
    <div className="bg-secondary-color">
      <Header />
      <section className="flex justify-center md:h-screen bg-secondary-color ">
        <div
          className="flex flex-col items-center justify-evenly max-w-screen-xl"
          style={{
            backgroundImage: "url(/images/3.png)", // ou "url(/images/bg.jpg)
            backgroundSize: "contain", // ajustez selon vos besoins (peut également essayer "100% 100%")
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center", // assurez-vous que l'image est centrée
            width: "100%",
            height: "100%",
          }}
        >
          <div className="flex flex-row text-primary-color font-bold text-xl md:text-6xl mb-4 md:mb-0">
            <span>{t("Everything_starts_here")}</span>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-10 px-5">
            <div className="flex flex-col bg-secondary-color md:w-1/3 h-full p-5 border-2 border-primary-color">
              <div className="flex flex-row justify-center">
                <div
                  className="rounded-full p-2 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(to right, #EE798A, #EA4335)",
                  }}
                >
                  <img
                    src="/images/heart-rate.png"
                    alt="heart"
                    color="primary-color"
                    width={20}
                    height={20}
                  />
                </div>
                <h1 className="text-primary-color text-3xl font-bold ml-2">
                  {t("Health")}
                </h1>
              </div>
              <img
                className="mx-auto mt-4"
                src="/images/4.png"
                alt="Search_screenshot"
                width={150}
              />
              <p className="text-primary-color md:text-xl font-semi-bold mt-2">
                {t("txt_health")}
              </p>
            </div>

            <div className="flex flex-col bg-secondary-color md:w-1/3 h-full p-5 border-2 border-primary-color">
              <div className="flex flex-row justify-center">
                <div
                  className="rounded-full p-2 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(to right, #EE798A, #EA4335)",
                  }}
                >
                  <img
                    src="/images/search.png"
                    alt="search"
                    color="primary-color"
                    width={20}
                    height={20}
                  />
                </div>
                <h1 className="ml-2 text-primary-color text-3xl font-bold">
                  {t("Monitor")}
                </h1>
              </div>
              <img
                className="mx-auto mt-4"
                src="/images/6.png"
                alt="Search_screenshot"
                width={150}
              />
              <p className="text-primary-color md:text-xl font-semi-bold mt-2">
                {t("txt_monitor")}
              </p>
            </div>

            <div className="flex flex-col bg-secondary-color md:w-1/3 h-full p-5 border-2 border-primary-color mb-2">
              <div className="flex flex-row justify-center">
                <div
                  className="rounded-full p-2 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(to right, #EE798A, #EA4335)",
                  }}
                >
                  <img src="/images/pen.png" alt="pen" width={20} height={20} />
                </div>
                <h1 className="text-primary-color text-3xl font-bold ml-2">
                  {t("Configure")}
                </h1>
              </div>
              <img
                className="mx-auto mt-4"
                src="/images/5.png"
                alt="Search_screenshot"
                width={150}
              />
              <p className="text-primary-color md:text-xl font-semi-bold mt-2">
                {t("txt_configure")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Descriptions;
