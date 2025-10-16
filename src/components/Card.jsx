import React from "react";

export default function Card({
  header,
  image,
  description,
  buttonText,
  onButtonClick,
  Price,
  children,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-[425px]  transition-shadow duration-300">
        <p className=" text-center p-4  border-b-2 border-[rgba(254,103,44,1)] text-[rgba(255,255,255,1)] bg-[rgba(85,85,85,1)]">{header}</p>
      <img src={image} alt="h" className="w-full h-48 object-cover" />

     
      <div className="p-4   flex flex-col space-y-3 text-sm">
        {description && <p className="text-[rgba(0,0,0,0.7)]   text-sm">{description}</p>}

     
       <div className="min-h-[24px]">
          {children ? (
            <a
              className="font-medium border-b border-[rgba(86,64,150,1)] text-[rgba(86,64,150,1)] text-xs"
              href="#"
            >
              {children}
            </a>
          ) : (
            <span className="invisible text-xs">placeholder</span>
          )}
        </div>
        
<div className="flex justify-between items-center">

    <span className="text-[rgba(86,64,150,1)] text-2xl font-bold">{Price}</span>
      {buttonText && (
          <button
            onClick={onButtonClick}
            className="mt-3 bg-[rgba(86,64,150,1)] text-white py-3 min-w-[164px] rounded-lg hover:bg-[rgba(80,64,150,1)] transition"
          >
            {buttonText}
          </button>
        )}
</div>
      </div>
    </div>
  );
}
