import { Link } from "react-router";
export default function Button({ text, imgSrc, logovisibility, link }) {
  return (
    <div className="buttonContainer justify-center items-center flex w-2/3 h-[5vh] text-[#e5e5e5] rounded-full border border-white">
      <Link to={link}>
        <div className="flex gap-3">
          <img
            src={imgSrc}
            className={`h-5 w-5 object-contain ${logovisibility}`}
          />
          <p>{text}</p>
        </div>
      </Link>
    </div>
  );
}
