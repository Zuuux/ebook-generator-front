import React, { useState } from 'react';
import ThemeSelector from './components/ThemeSelector';
import PromptInput from './components/PromptInput';
import Actions from './components/Actions';
import Console from './components/Console';
import PdfPreview from './components/PdfPreview';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [logs, setLogs] = useState([]);
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleThemeChange = (newTheme) => {
    setLogs((prevLogs) => [...prevLogs, `Thème du ebook changé à : ${newTheme}`]);
  };

  const handleGenerate = () => {
    setLogs((prevLogs) => [...prevLogs, `Génération du PDF avec le prompt : "${prompt}"`]);
    // Simuler une commande en cours d'exécution et génération d'un PDF fictif
    setTimeout(() => {
      const dummyPdfUrl = 'https://example.com/dummy.pdf';
      setPdfUrl(dummyPdfUrl);
      setLogs((prevLogs) => [...prevLogs, `PDF généré avec succès !`]);
    }, 2000);
  };

  const handleClear = () => {
    setPrompt('');
    setLogs((prevLogs) => [...prevLogs, 'Prompt effacé']);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8 border-r flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-6 text-center">AI Ebook PDF Generator</h1>
            <ThemeSelector onThemeChange={handleThemeChange} />
            <PromptInput prompt={prompt} setPrompt={setPrompt} />
            <Actions onGenerate={handleGenerate} onClear={handleClear} />
          </div>
          <Console logs={logs} />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <PdfPreview pdfUrl={pdfUrl} />
        </div>
      </div>
    </div>
  );
};

export default App;
