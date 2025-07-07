const Separator = () => {
  return (
    <div className="flex items-center justify-center my-12">
      <div className="w-full max-w-[800px] mx-auto flex items-center">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[rgba(107,255,208,0.3)] to-transparent"></div>
        <div className="mx-4">
          <div className="w-2 h-2 bg-[#6bffd0] rotate-45 transform animate-pulse"></div>
        </div>
        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-[rgba(107,139,255,0.3)] to-transparent"></div>
      </div>
    </div>
  );
};

export default Separator;