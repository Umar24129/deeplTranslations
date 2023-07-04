import React, { useState } from 'react';
import readXlsxFile from 'read-excel-file';

function ExcelToJsonConverter() {
  const [jsonData, setJsonData] = useState({
    DE: {},
    En: {},
    Fr: {},
    It: {},
  });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    try {
      const rows = await readXlsxFile(file);

      const newJsonData = {
        DE: {},
        En: {},
        Fr: {},
        It: {},
      };

      rows.forEach((row) => {
        const propertyName = row[5]; // Column F
        const deValue = row[6]; // Column G
        const enValue = row[7]; // Column H
        const frValue = row[8]; // Column I
        const itValue = row[9]; // Column J

        newJsonData.DE[propertyName] = deValue || '';
        newJsonData.En[propertyName] = enValue || '';
        newJsonData.Fr[propertyName] = frValue || '';
        newJsonData.It[propertyName] = itValue || '';
      });

      setJsonData(newJsonData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

      <div>
        <label>DE:</label>
        <textarea value={JSON.stringify(jsonData.DE, null, 2)} readOnly />
      </div>
      <div>
        <label>En:</label>
        <textarea value={JSON.stringify(jsonData.En, null, 2)} readOnly />
      </div>
      <div>
        <label>Fr:</label>
        <textarea value={JSON.stringify(jsonData.Fr, null, 2)} readOnly />
      </div>
      <div>
        <label>It:</label>
        <textarea value={JSON.stringify(jsonData.It, null, 2)} readOnly />
      </div>
    </div>
  );
}

export default ExcelToJsonConverter;
