import { ReactNode } from "react";

export const Button: React.FC<{
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "button";
}> = ({ children, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className=" inline-block px-6 py-2.5 bg-black text-neon-pink font-medium text-base leading-tight uppercase rounded shadow-md hover:bg-neon-pink hover:text-neon-green hover:shadow-lg border focus:border-4 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
    >
      {children}
    </button>
  );
};
