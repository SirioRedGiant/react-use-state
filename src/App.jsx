//note  IL NONNO => È il proprietario dello Stato (currentLanguage). è il "capofamiglia" che possiede il portafoglio (i dati).
//note  Cosa fa: Decide cosa mostrare e passa le "istruzioni" ai figli.

import { useState } from "react";
import { languages } from "./data/languages";
import LanguageButtonList from "./components/LanguageButtonList";
import LanguageCardDetails from "./components/LanguageCardDetails";

export default function App() {
  //note stato --> primo oggetto dell'array
  const [currentLanguage, setCurrentLanguage] = useState(null);
  console.log("Stato attuale ID:", currentLanguage?.id);
  return (
    <div className="container">
      <h1>Learn Web Development</h1>

      {/* import language button list */}
      <LanguageButtonList
        languages={languages}
        currentLanguage={currentLanguage}
        onSelect={setCurrentLanguage}
      />
      {/* import card detail */}
      <LanguageCardDetails language={currentLanguage} />
    </div>
  );
}
