import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

function Contact() {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const reCAPTCHASecretKey = require("../reCAPTCHA_secret_key.js");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("/php/contact.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Réinitialiser le formulaire en cas de succès
        form.reset();
        setMessage("Message envoyé avec succès !");
      } else {
        const responseData = await response.json();
        setMessage("Erreur: " + responseData.message);
      }
    } catch (error) {
      setMessage("Erreur lors de l'envoi du formulaire");
    }
  };

  const renderPopup = () => {
    if (message !== "") {
      return (
        <div className="popup flex flex-col items-center bg-secondary-color text-primary-color">
          <p>{message}</p>
          <button className="bg-button-color hover:text-primary-color text-secondary-color">
            <Link to="/" onClick={() => setMessage("")}>
              {t("fermer")}
            </Link>
          </button>
        </div>
      );
    }
  };

  return (
    <div className="bg-secondary-color">
      <Header />
      <section className="flex justify-center h-screen bg-secondary-color">
        <div
          className="flex flex-row items-center justify-center"
          style={{
            backgroundImage: "url(/images/3.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="flex flex-col bg-secondary-color  md:w-2/3 p-5 m-5 border-2 border-primary-color">
            <p className="flex justify-center md:justify-start text-primary-color text-sm md:text-2xl font-bold">
              {t("txt_contact")}
            </p>
            <p className="flex flex-wrap justify-center text-primary-color text-sm  md:text-2xl font-bold mt-5">
              {t("slogan_contact")}
            </p>
            {/* Formulaire de contact */}
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label
                htmlFor="name"
                className="text-tertiary-color md:text-xl font-bold mt-2"
              >
                {t("name")}
              </label>
              <input
                className="p-2"
                type="text"
                id="username"
                name="username"
                required
              />

              <label
                htmlFor="email"
                className="text-tertiary-color md:text-xl font-bold mt-2"
              >
                Email
              </label>
              <input
                className="p-2"
                type="email"
                id="email"
                name="email"
                required
              />

              <label
                htmlFor="message"
                className="text-tertiary-color md:text-xl font-bold mt-2"
              >
                Message
              </label>
              <textarea
                className="p-2"
                id="message"
                name="message"
                rows="4"
                required
              />

              <button
                disabled={!captcha}
                type="submit"
                className="bg-button-color hover:text-primary-color font-bold p-2 rounded-md mt-3"
              >
                {t("send")}
              </button>
              <ReCAPTCHA
                className="mt-3"
                sitekey={reCAPTCHASecretKey}
                onChange={(value) => setCaptcha(value)}
              />
            </form>
            <p className="flex flex-col md:flex-row justify-center items-center text-primary-color text-sm  md:text-xl font-bold mt-5">
              <span className="flex flex-wrap items-center">
                <img
                  src="/images/mail.png"
                  alt="mail"
                  width={30}
                  height={30}
                  className="mr-2"
                />
                mycodeapps@gmail.com
              </span>
              <span className="flex items-center">
                <img src="/images/x.png" alt="mail" width={30} height={30} />
                <a
                  href="https://twitter.com/MYCodeApps1"
                  className="text-primary-color"
                >
                  Twitter
                </a>
              </span>
            </p>
            <p className="flex justify-end text-tertiary-color text-sm md:text-xl font-bold">
              <a
                href="https://lespetitsdeveloppeurs.fr"
                className="flex flex-wrap"
              >
                "Powered by lespetitsdeveloppeurs.fr"
              </a>
            </p>
            {/* Ajoutez l'appel à renderPopup() ici pour afficher la pop-up */}
            {renderPopup()}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
