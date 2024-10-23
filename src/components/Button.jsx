const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-slate-700 hover:bg-slate-800 transition-colors text-white p-2 rounded-xl font-semibold"
    >
      {title}
    </button>
  );
};

export default Button;
