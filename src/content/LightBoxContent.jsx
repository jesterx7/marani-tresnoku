function LightBoxContent({ photos, index, onClose, onPrev, onNext }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl"
      >
        ✕
      </button>

      {/* Prev */}
      <button
        onClick={onPrev}
        className="absolute left-4 text-white text-4xl"
      >
        ‹
      </button>

      {/* Image */}
      <img
        src={photos[index]}
        className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
        alt=""
      />

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-4 text-white text-4xl"
      >
        ›
      </button>
    </div>
  );
}

export default LightBoxContent;