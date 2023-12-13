import classNames from "classnames";

function Button({ text, onClick }) {
  return (
    <div
      className={classNames({
        "py-2 px-3 w-fit h-fit cursor-pointer": true,
        "text-sm text-gray-100 font-semibold": true,
        "bg-blue-400 hover:bg-blue-500": true,
        "transition-all duration-200": true,
      })}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default Button;
