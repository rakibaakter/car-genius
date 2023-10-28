const OutlineButton = ({ children }) => {
  return (
    <button className="btn p-4 text-white bg-[#FF3811] hover:bg-white hover:text-[#FF3811]">
      {children}
    </button>
  );
};

export default OutlineButton;
