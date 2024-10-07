export const DrawOutlineButton = ({ children, ...rest }) => {
    return (
      <button
        {...rest}
        className="group  relative px-4 py-2 font-medium bg-white text-black  transition-colors  duration-[400ms] "
      >
        <span>{children}</span>
  
        {/* TOP */}
        <span className="absolute left-0 top-0 h-[2px] w-0 drop-shadow-[0px_0px_5px_#e12a35a2] bg-OneTypeRed transition-all duration-100 group-hover:w-full " />
  
        {/* RIGHT */}
        <span className="absolute right-0 top-0 h-0 w-[2px] drop-shadow-[0px_0px_5px_#e12a35a2] bg-OneTypeRed transition-all delay-100 duration-100 group-hover:h-full " />
  
        {/* BOTTOM */}
        <span className="absolute bottom-0 right-0 h-[2px] w-0 drop-shadow-[0px_0px_5px_#e12a35a2] bg-OneTypeRed transition-all delay-200 duration-100 group-hover:w-full " />
  
        {/* LEFT */}
        <span className="absolute bottom-0 left-0 h-0 w-[2px] drop-shadow-[0px_0px_5px_#e12a35a2] bg-OneTypeRed transition-all delay-300 duration-100 group-hover:h-full  " />
      </button>
    );
  };