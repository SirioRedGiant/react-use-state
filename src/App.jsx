import { useState } from "react";
import { languages } from "./data/languages";
import LanguageButton from "./components/LanguageButton";
import LanguageButtonList from "./components/LanguageButtonList";
import LanguageCardDetails from "./components/LanguageCardDetails";

export default function App() {
  //note stato --> primo oggetto dell'array
  const [currentLanguage, setCurrentLanguage] = useState(null);

  return (
    <div className="container">
      <h1>Learn Web Development</h1>

      {/* import language button list */}
      <LanguageButtonList
        languages={languages}
        currentLanguage={currentLanguage}
        onClick={setCurrentLanguage}
      />
      {/* import card detail */}
      <LanguageCardDetails language={currentLanguage} />
    </div>
  );
}
