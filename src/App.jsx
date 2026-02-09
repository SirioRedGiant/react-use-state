import { useState } from "react";
import { languages } from "./data/languages";
import LanguageButton from "./components/LanguageButton";

export default function App() {
  //note stato --> primo oggetto dell'array
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  return (
    <div className="container">
      <h1>Learn Web Development</h1>

      {/* bottoni */}
      <div className="button-container">
        {languages.map((language) => (
          <LanguageButton
            key={language.id}
            selectedLanguage={language}
            isActive={currentLanguage.id === language.id}
            onClick={() => setCurrentLanguage(language)}
          />
        ))}
      </div>
      {/* card */}
      <div className="card">
        <h2>{currentLanguage.title}</h2>
        <p>{currentLanguage.description} </p>
      </div>
    </div>
  );
}
