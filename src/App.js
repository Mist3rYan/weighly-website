import { Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import your i18n configuration

import Home from "./pages/Home";
import Description from "./pages/Description";
import Contact from "./pages/Contact";
import Notices from "./pages/Notices";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notices" element={<Notices />} />
      </Routes>
    </I18nextProvider>
  );
}

export default App;
