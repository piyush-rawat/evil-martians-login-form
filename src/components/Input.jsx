import clsx from "clsx";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({ className, icon, type, ...rest }) => {
  const [secure, setSecure] = useState(true);

  return (
    <div className="flex items-center">
      <div className="h-[40px] px-3 flex justify-center items-center border border-r-0 rounded-tl-xl rounded-bl-xl bg-slate-200">
        {icon}
      </div>
      <input
        className={clsx(
          "h-[40px] border p-2 text-sm placeholder:text-xs rounded-xl rounded-tl-none rounded-bl-none w-full focus:outline-none focus:border-purple-500",
          type === "password" && "rounded-tr-none rounded-br-none",
          className
        )}
        type={type === "password" ? (secure ? "password" : "text") : type}
        {...rest}
      />
      {type === "password" && (
        <div
          onClick={() => setSecure(!secure)}
          className="h-[40px] px-3 flex justify-center items-center border border-l-0 rounded-tr-xl rounded-br-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
        >
          {secure ? <FaEyeSlash /> : <FaEye />}
        </div>
      )}
    </div>
  );
};

export default Input;
