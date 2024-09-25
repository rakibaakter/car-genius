const OutlineButton = ({ children }) => {
  return (
    <button className="uppercase p-2 text-[#FF3811] border rounded-md border-[#FF3811] hover:bg-[#FF3811] hover:text-white">
      {children}
    </button>
  );
};

export default OutlineButton;
