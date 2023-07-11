import React, { createContext, useState } from "react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export const Context = createContext({});

export default function ContextProviderr({ children }) {
  const { i18n } = useTranslation();
  const [takeLang, setTakeLang] = useState("");
  const [change, setChange] = useState([]);
  const videoRef = useRef();
  const [play, setPlay] = useState(false);

  
  function changeHandle(e) {
    i18n.changeLanguage(e.target.lang);
    localStorage.setItem("i18nextLng", JSON.stringify(e.target.lang));
    setChange(JSON.parse(localStorage.getItem("i18nextLng")))
    setTakeLang(e.target.lang);
  }

  const videoPlay = () => {
    videoRef.current.play();
    setPlay(!play);
  };



  return (
    <Context.Provider value={{ changeHandle, change, videoPlay, play, videoRef, takeLang }}>{children}</Context.Provider>
  );
}
