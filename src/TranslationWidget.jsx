import React, { useState } from 'react';

// function convertToNormalCase(str) {
//   // Convert the entire string to lowercase
//   const lowercaseStr = str.toLowerCase();
  
//   // Split the string into an array of words
//   const words = lowercaseStr.split(' ');

//   // Capitalize the first letter of each word
//   const normalCaseWords = words.map((word) => {
//     // Capitalize the first letter
//     const capitalizedLetter = word.charAt(0).toUpperCase();
//     // Append the remaining letters in lowercase
//     const remainingLetters = word.slice(1);
//     // Concatenate the capitalized letter with the remaining letters
//     return capitalizedLetter + remainingLetters;
//   });

//   // Join the words back into a single string
//   const normalCaseStr = normalCaseWords.join(' ');

//   return normalCaseStr;
// }
function TranslationWidget() {
  const [englishWord, setEnglishWord] = useState('');
  const [germanTranslation, setGermanTranslation] = useState('');
  const [frenchTranslation, setFrenchTranslation] = useState('');
  const [italianTranslation, setItalianTranslation] = useState('');

  const handleTranslateClick = async () => {
    try {
      const apiKey = process.env.DEEPL_APIKEY;

      // Translate from English to German
      const germanResponse = await fetch(`https://api-free.deepl.com/v2/translate?auth_key=${apiKey}&text=${encodeURIComponent(englishWord)}&target_lang=DE`);
      const germanData = await germanResponse.json();
      setGermanTranslation(germanData.translations[0].text);

      // Translate from English to French
      const frenchResponse = await fetch(`https://api-free.deepl.com/v2/translate?auth_key=${apiKey}&text=${encodeURIComponent(englishWord)}&target_lang=FR`);
      const frenchData = await frenchResponse.json();
      setFrenchTranslation(frenchData.translations[0].text);

      // Translate from English to Italian
      const italianResponse = await fetch(`https://api-free.deepl.com/v2/translate?auth_key=${apiKey}&text=${encodeURIComponent(englishWord)}&target_lang=IT`);
      const italianData = await italianResponse.json();
      setItalianTranslation(italianData.translations[0].text);
    } catch (error) {
      console.error('Error occurred during translation:', error);
    }
  };

  const [text, setText] = useState('');
  const [copiedText, setCopiedText] = useState('');

  const handleCopyClick = (copyText) => {
    navigator.clipboard.writeText(copyText);
    setCopiedText(copyText);
  };
  return (
    <div>
      <h2>Translation Widget</h2>
      <input type="text" value={englishWord} onChange={event => setEnglishWord(event.target.value)} />
      <button onClick={handleTranslateClick}>Translate</button>
      <h3>German Translation:</h3>
      <p style={{"background": "aquamarine"}} >{germanTranslation&& ( 
        <>
        <span>{germanTranslation}</span>
         <button onClick={() => handleCopyClick(germanTranslation)}>Copy to Clipboard</button>
            {copiedText === germanTranslation && <span>Copied!</span>}
        </>
      )}</p>
      <h3>French Translation:</h3>
      <p style={{"background": "red"}}>{frenchTranslation && ( 
        <>
        <span>{frenchTranslation}</span>
         <button onClick={() => handleCopyClick(frenchTranslation)}>Copy to Clipboard</button>
            {copiedText === frenchTranslation && <span>Copied!</span>}
        </>
      )}</p>
      <h3>Italian Translation:</h3>
      <p style={{"background": "lightblue"}}>{italianTranslation && ( 
        <>
        <span>{italianTranslation}</span>
         <button onClick={() => handleCopyClick(italianTranslation)}>Copy to Clipboard</button>
            {copiedText === italianTranslation && <span>Copied!</span>}
        </>
      )}</p>


    </div>
  );
}

export default TranslationWidget;
