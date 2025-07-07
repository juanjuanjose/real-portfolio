const Ability = ({ imgSrc, labelText, alt, className = "" }) => {
  return (
    <div 
      className={`group flex flex-col items-center justify-center p-4 bg-[rgba(255,255,255,0.03)] rounded-lg transition-all duration-300 hover:bg-[rgba(255,255,255,0.07)] hover:translate-y-[-5px] hover:shadow-[0_8px_15px_rgba(107,255,208,0.1)] ${className}`}
    >
      <div className="relative mb-3 w-16 h-16 flex items-center justify-center">
        {/* Efecto de resplandor al hacer hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(107,255,208,0)] via-[rgba(107,255,208,0)] to-[rgba(107,255,208,0)] group-hover:from-[rgba(107,255,208,0.1)] group-hover:via-[rgba(107,255,208,0.05)] group-hover:to-[rgba(107,255,208,0)] transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
        
        {/* Imagen con efecto scale en hover */}
        <img 
          src={imgSrc} 
          alt={alt} 
          className="h-12 w-12 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Etiqueta con animación en hover */}
      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
        {labelText}
      </span>
    </div>
  );
};

export default Ability;