import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
}) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContactClick = () => {
    const message = `Hola, quiero más información sobre el curso de ${title}`;
    const whatsappUrl = `https://wa.me/51984040264?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackgroundClick}
    >
      <div
        className="bg-gradient-to-r from-[#623B96] via-[#DB2777] to-[#623B96] animate-gradient-move bg-200% 
                   p-6 rounded-lg shadow-lg max-w-[1200px] w-full max-h-[90vh] relative overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300"
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div>
          {/* Renderiza el contenido dinámico del modal */}
          {content}

          {/* Botones de acción */}
          <div className="mt-6 flex justify-between sm:justify-center gap-4">
            {/* Botón Cerrar */}{" "}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleContactClick}
            >
              Contáctanos
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 sm:ml-40 lg:ml-0"
              onClick={onClose}
            >
              Cerrar
            </button>
            {/* Botón Contáctanos */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
