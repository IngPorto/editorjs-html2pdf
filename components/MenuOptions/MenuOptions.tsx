import React from "react";
import { PDFDocumentPreview } from "../PDFDocumentPreview";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useContentStore } from "../../store/config";

export default function MenuOptions() {
  const contentFormatted = useContentStore((store) => store.contentFormatted);

  const cleanTextEditor = () => {};

  const loadContent = () => {};

  const saveContent = () => {};

  return (
    <div className="py-4">
      <div className="flex items-center justify-center">
        <button
          onClick={cleanTextEditor}
          className="mr-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Limpiar
        </button>

        <button
          onClick={loadContent}
          className="mr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Cargar
        </button>

        <button
          onClick={saveContent}
          className="mr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Guardar
        </button>

        <PDFDownloadLink
          document={<PDFDocumentPreview content={contentFormatted} />}
          fileName="mi_documento.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              "Cargando documento..."
            ) : (
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                Descargar
              </button>
            )
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}
