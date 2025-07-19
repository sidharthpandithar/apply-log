export default function GridLayoutMob({ contacts }) {
  let items = contacts.slice(0, 4);
  return (
    <div className=" grid grid-cols-2 gap-5">
      {items.map((contact, index) => {
        return (
          <div
            key={index}
            className="h-[30vh] w-[40vw] shadow-black shadow-md bg-gradient-to-r from-neutral-900  to-neutral-800 rounded-md card  flex flex-col p-2 justify-center items-center"
          >
            <div className="w-full overflow-hidden h-3/4 border-l border-r border-t border-transparent rounded-t-md">
              <img
                src={contact.image}
                alt=""
                className="h-full w-full object-cover "
              />
            </div>
            <div className="w-full flex-1 border  rounded-b-md bg-neutral-900 border-transparent flex flex-col justify-center items-center">
              <p className="text-[#e5e5e5] font-bold">{contact.title}</p>
              <p className="text-zinc-500">{contact.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
