import React, { useState } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleAnalysis = () => {
    // Lógica para el análisis de imágenes
    console.log('Analizando la imagen:', imageUrl);
    // Puedes agregar aquí la lógica para analizar la imagen
  };

  const handleImageGeneration = () => {
    // Lógica para la generación de imágenes
    console.log('Generando imagen para la solicitud:', imageUrl);
    // Puedes agregar aquí la lógica para generar la imagen
  };

  return (
    <div>
      <h1>Image Analyzer</h1>
      <label>
        Dirección URL de la imagen:
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleAnalysis}>Analizar Imagen</button>
      <button onClick={handleImageGeneration}>Generar Imagen</button>
    </div>
  );
}

export default App;
