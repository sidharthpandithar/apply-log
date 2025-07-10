export default function Button({ color, buttontext, view }) {
  return (
    <button className={`${color} ${view} text-black px-3 py-1 rounded-md`}>
      {buttontext}
    </button>
  );
}
