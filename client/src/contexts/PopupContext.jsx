import { createContext, useState } from "react";

export const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [popup, setPopup] = useState(false);

  return (
    <PopupContext.Provider value={{ popup, setPopup }}>
      {children}
    </PopupContext.Provider>
  );
}
