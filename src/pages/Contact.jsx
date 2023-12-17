import Header from "../components/Header";
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="bg-secondary-color ">
      <Header />
            <section className="flex justify-center h-screen bg-secondary-color">
          <div
            className="flex flex-col md:flex-row items-center max-w-screen-xl"
            style={{
              backgroundImage:  "url(./images/3.png)",
              backgroundSize: "contain", // ajustez selon vos besoins (peut également essayer "100% 100%")
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center", // assurez-vous que l'image est centrée
              width: "100%",
              height: "100%",
            }}
          >
          <div className="flex flex-col justify-around bg-black w-full h-2/3 p-5 bg-opacity-50">
            <div className="flex flex-row items-center justify-center text-primary-color font-bold md:text-6xl gap-5">
              <img src="./images/mail.png" alt="mail" width={90} height={90}/>
              <span>CONTACT</span>
            </div>
            <p className="flex justify-center text-primary-color text-base md:text-3xl font-bold gap-3">{t('txt_contact')}</p>
            <p className="flex justify-center text-tertiary-color text-base md:text-6xl font-bold gap-3">mycodeapps@gmail.com</p>
            <p className="flex justify-center text-primary-color text-base md:text-3xl font-bold gap-3">{t('slogan_contact')}</p>
            <p className="flex justify-end text-tertiary-color text-base md:text-xl font-bold gap-3">"Powered by <a href="https://lespetitsdeveloppeurs.fr">https://lespetitsdeveloppeurs.fr"</a></p>
          </div>
          </div>
        </section>
    </div>
  );
}

export default Contact;