import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Stores.css";

function Stores() {
  const [store, setStore] = useState([]);
  const [t,i18next] = useTranslation();

  useEffect(() => {
    axios
      .get("https://api.alibaraka.com/api/blog_last/")
      .then((res) => setStore(res?.data.Last))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {store.map((data) => {
        return (
          <div className="storesBox" key={data?.id}>
            <h4 className="storesBoxTitle">{data[`name_${i18next.language}`]}</h4>
            <p className="storeBoxParagraf">{data[`description_${i18next.language}`]}</p>
            <Link to={`/blogInfo/${data?.id}`} className="moreLinkStore">More information</Link>
          </div>
        );
      })}
    </>
  );
}

export default Stores;
