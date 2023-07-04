import React, { useState } from 'react';

function CopyTextWidget() {
  const [text, setText] = useState('');
  const [copiedText, setCopiedText] = useState('');

  const handleCopyClick = (copyText) => {
    navigator.clipboard.writeText(copyText);
    setCopiedText(copyText);
  };

  return (
    <div>
      <h2>Copy Text Widget</h2>
      <p>{text}</p>
      <button onClick={() => setText('Paragraph 1 Text')}>Generate Text 1</button>
      <button onClick={() => setText('Paragraph 2 Text')}>Generate Text 2</button>
      <button onClick={() => setText('Paragraph 3 Text')}>Generate Text 3</button>
      <p>
        {text && (
          <>
            <span>{text}</span>
            <button onClick={() => handleCopyClick(text)}>Copy to Clipboard</button>
            {copiedText === text && <span>Copied!</span>}
          </>
        )}
      </p>
      <p>
        {text && (
          <>
            <span>{text.toUpperCase()}</span>
            <button onClick={() => handleCopyClick(text.toUpperCase())}>Copy to Clipboard</button>
            {copiedText === text.toUpperCase() && <span>Copied!</span>}
          </>
        )}
      </p>
      <p>
        {text && (
          <>
            <span>{text.toLowerCase()}</span>
            <button onClick={() => handleCopyClick(text.toLowerCase())}>Copy to Clipboard</button>
            {copiedText === text.toLowerCase() && <span>Copied!</span>}
          </>
        )}
      </p>
    </div>
  );
}

export default CopyTextWidget;
