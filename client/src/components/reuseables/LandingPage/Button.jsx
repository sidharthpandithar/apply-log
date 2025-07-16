import { Link } from "react-router";
export default function Button({ color, buttontext, bordercolor, hover }) {
  return (
    <Link to={"/signup"}>
      <button
        className={`${color} text-black px-4 py-2 text-base rounded-md ${bordercolor} ${hover} hover:cursor-pointer hover:scale-102`}
      >
        {buttontext}
      </button>
    </Link>
  );
}
