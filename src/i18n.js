import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      fermer : "Close",
      send: "Send",
      name: "Name",
      Home: "Home",
      Legal: "Legal Notices",
      Weight_tracking: "Weight tracking",
      Everything_starts_here: "Everything starts here",
      Health: "Health",
      txt_health:
        "“Discover better health with the Weighly app! Start taking care of yourself now!”",
      Monitor: "Monitor",
      txt_monitor:
        "“Enhance your well-being with Weighly! Track weight, sleep, cycle, activity, and meals. Start now for a healthier life!“",
      Configure: "Configure",
      txt_configure:
        "“Customize Weighly your way! Tailor the app to your preferences for a personalized tracking experience.“",
      txt_contact:
        "For any inquiries or assistance, please feel free to contact us via email.",
      slogan_contact: "“We would be delighted to assist you!“",
      txt_legal:
        "General conditions of use of the Weighly application. <br/><br/> Last updated: 08/11/2023. <br/><br/>Welcome to the Weighly mobile app. We are delighted to welcome you as a user of our application. Please read the following Terms of Use carefully, as they govern your use of the Weighly App. <br/><br/> 1. Acceptance of conditions <br/>By using the Weighly application, you accept these general conditions of use without reservation. If you do not agree to these terms, please do not use the application. <br/><br/> 2. Purpose of the application <br/>- The Weighly application aims to allow users to track their body weight on a daily basis. <br/>- Users can record their weight, indicate meals consumed and report whether they have engaged in physical activity. <br/>- The application processes the collected data to display analyzes in the form of curves and graphs.<br/>- All data is saved in the phone. <br/>- It encourages users with motivating messages. <br/>- It is important to note that Weighly is neither a medical nor a diet app. <br/><br/> 3. Collection of personal data <br/>- To use the Weighly application, you must create an account. <br/>- When creating your account, we will collect the following information: date of birth, weight, height, gender, email address and a nickname. <br/>- All data collected can be modified and deleted at any time by the user. <br/><br/> 4. Account Deletion <br/>- Users have the option to delete their account at any time. <br/>- To delete your account, please follow the instructions provided in the application. <br/><br/> 5. Account Inactivity <br/>- If there is inactivity on your account for a period of one year, we will send you a reminder email one week before the scheduled account deletion date. <br/>- If your account remains inactive after this time, it will be deleted in accordance with our account deletion policy. <br/><br/> 6. Data security <br/>- We implement security measures to protect your personal data. However, it is your responsibility to maintain the confidentiality of your login information. <br/><br/> 7. Advertising <br/>- Advertising allows developers to be paid without you having to purchase the application.<br/> If advertising appears after you have purchased the application, please contact us at mycodeapps@gmail. com. <br/><br/> 8. Contact <br/>- For any questions or concerns regarding the Weighly app or these Terms of Service, please contact us at mycodeapps@gmail.com. <br/><br/>By using the Weighly app, you agree to these terms of use. Please see our privacy policy to learn more about how we process your personal data. <br/>We reserve the right to modify these terms and conditions at any time, so please review them regularly to ensure you are informed of the latest updates. <br/>Thank you for using the Weighly app to track your weight and stay fit.",
    },
  },
  fr: {
    translation: {
      fermer : "Fermer",
      send: "Envoyer",
      name: "Nom",
      Home: "Accueil",
      Legal: "Mentions légales",
      Weight_tracking: "Suivi de poids",
      Everything_starts_here: "Tout commence ici",
      Health: "Santé",
      txt_health:
        "“Ayez une meilleure santé avec l'application Weighly! Commencez à prendre soin de vous dès maintenant!”",
      Monitor: "Surveiller",
      txt_monitor:
        "“Améliorez votre bien-être avec Weighly ! Surveillez votre poids, sommeil, cycle menstruel, votre activité et vos repas. Commencez dès maintenant pour une vie plus saine !“",
      Configure: "Configurer",
      txt_configure:
        "“Personnalisez Weighly à votre façon ! Adaptez l'application à vos préférences pour une expérience de suivi personnalisée.“",
      txt_contact:
        "Pour toute question ou assistance, n'hésitez pas à nous contacter par email.",
      slogan_contact: "“Nous serons ravis de vous aider !“",
      txt_legal:
        "Conditions générales d'utilisation de l'application Weighly. <br/><br/>Dernière mise à jour : 08/11/2023. <br/><br/>Bienvenue sur l'application mobile Weighly. Nous sommes ravis de vous accueillir en tant qu'utilisateur de notre application. Veuillez lire attentivement les conditions générales d'utilisation suivantes, car elles régissent votre utilisation de l'application Weighly. <br/><br/>1. Acceptation des conditions <br/>En utilisant l'application Weighly, vous acceptez sans réserve ces conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application. <br/><br/>2. Objet de l'application <br/>- L'application Weighly a pour objectif de permettre aux utilisateurs de suivre leur poids corporel au quotidien. <br/>- Les utilisateurs peuvent enregistrer leur poids, indiquer les repas consommés et signaler s'ils ont pratiqué une activité physique. <br/>- L'application traite les données collectées pour afficher des analyses sous forme de courbes et de graphiques.<br/>- Toutes les données sont sauvegardées dans le téléphone. <br/>- Elle encourage les utilisateurs avec des messages motivants. <br/>- Il est important de noter que Weighly n'est ni une application médicale ni une application de régime. <br/><br/>3. Collecte de données personnelles <br/>- Pour utiliser l'application Weighly, vous devez créer un compte. <br/>- Lors de la création de votre compte, nous collecterons les informations suivantes : date de naissance, poids, taille, sexe, adresse e-mail et un pseudo. <br/>- Toutes les données collectées sont modifiables et supprimables à tout moment par l'utilisateur. <br/><br/>4. Suppression de compte <br/>- Les utilisateurs ont la possibilité de supprimer leur compte à tout moment. <br/>- Pour supprimer votre compte, veuillez suivre les instructions fournies dans l'application. <br/><br/>5. Inactivité du compte <br/>- En cas d'inactivité sur votre compte pendant une période d'un an, nous vous enverrons un e-mail de rappel une semaine avant la date prévue de suppression du compte. <br/>- Si votre compte reste inactif après ce délai, il sera supprimé conformément à notre politique de suppression de compte. <br/><br/>6. Sécurité des données <br/>- Nous mettons en place des mesures de sécurité pour protéger vos données personnelles. Cependant, il est de votre responsabilité de maintenir la confidentialité de vos informations de connexion. <br/><br/>7.  Publicité <br/>- La publicité permet de rémunérer les développeurs sans que vous n’ayez à acheter l’application.<br/>Si de la publicité apparaît alors que vous avez acheté l’application, veuillez nous contacter à l'adresse mycodeapps@gmail.com . <br/><br/>8. Contact <br/>- Pour toute question ou préoccupation concernant l'application Weighly ou ces conditions générales d'utilisation, veuillez nous contacter à l'adresse mycodeapps@gmail.com . <br/><br/>En utilisant l'application Weighly, vous acceptez ces conditions générales d'utilisation. Veuillez consulter notre politique de confidentialité pour en savoir plus sur la manière dont nous traitons vos données personnelles. <br/>Nous nous réservons le droit de modifier ces conditions générales à tout moment, alors veuillez les consulter régulièrement pour vous assurer d'être informé des dernières mises à jour. <br/>Nous vous remercions d'utiliser l'application Weighly pour suivre votre poids et rester en forme.",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    detection: {
      order: ["navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
    fallbackLng: "en", // langue de secours
    interpolation: {
      escapeValue: false, // non nécessaire pour React
    },
  });

export default i18n;
