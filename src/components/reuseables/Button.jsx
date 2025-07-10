export default function Button({ color, buttontext }) {
  return (
    <button className={`${color} text-black px-2 py-1 rounded-md`}>
      {buttontext}
    </button>
  );
}
