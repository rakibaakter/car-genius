const OutlineButton = ({ children }) => {
  return (
    <button className=" uppercase py-2 px-4 rounded-md text-white bg-[#FF3811] border hover:bg-white hover:text-[#FF3811]">
      {children}
    </button>
  );
};

export default OutlineButton;
