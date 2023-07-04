import logo from './logo.svg';
import './App.css';
import TranslationWidget from './TranslationWidget';
import React from 'react';
import ExcelToJsonConverter from './ExcelToJson';

function App() {
  return (
    <div className="App">
      
      <TranslationWidget/>
      <ExcelToJsonConverter/>
    </div>
  );
}

export default App;
