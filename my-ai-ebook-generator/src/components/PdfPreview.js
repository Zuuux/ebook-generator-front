import React from 'react';

const PdfPreview = ({ pdfUrl }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold mb-4 text-center">PDF Preview</h2>
        <div className="border border-gray-300 rounded-lg p-4 mb-4 h-96 flex items-center justify-center">
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              title="PDF Preview"
              className="w-full h-full"
            />
          ) : (
            <p className="text-gray-500">Aucun PDF généré pour le moment.</p>
          )}
        </div>
      </div>
      {pdfUrl && (
        <div className="text-center">
          <a
            href={pdfUrl}
            download="ebook.pdf"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Télécharger le PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default PdfPreview;
