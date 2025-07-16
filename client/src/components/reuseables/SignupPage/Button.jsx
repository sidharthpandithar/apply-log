import { useNavigate } from "react-router";
export default function Button({ text, imgSrc, logovisibility, link }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(link)}
      className="buttonContainer justify-center hover:cursor-pointer items-center flex w-2/3 h-[5vh] text-[#e5e5e5] rounded-full border border-white"
    >
      <div className="flex gap-3">
        <img
          src={imgSrc}
          className={`h-5 w-5 object-contain ${logovisibility}`}
        />
        <p>{text}</p>
      </div>
    </div>
  );
}
