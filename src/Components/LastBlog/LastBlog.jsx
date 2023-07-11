import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./LastBlog.css";

export default function LastBlog() {
  const [lastBlog, setLastBlog] = useState([]);
  const [t, i18next] = useTranslation();

  useEffect(() => {
    axios
      .get("https://api.alibaraka.com/api/blogs/")
      .then((res) => setLastBlog(res?.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="blogLastBox">
        {lastBlog.map((data) => {
          if (data?.id === 28 || data?.id === 29 || data?.id === 30) {
            return (
              <Link to={`../blogInfo/${data?.id}`} key={data?.id} style={{textDecoration: "none"}}>
                <div className="blogLastCard">
                  <div className="blogLastImgBox">
                    <img className="blogLastPic" src={data?.image} alt="blog picture" />
                  </div>
                  <h3 className="blogLastName">{data?.[`name_${i18next.language}`]}</h3>
                  <p className="blogLastDesc">{data?.[`description_${i18next.language}`]}</p>
                  <span className="blogLastDate">{data?.date}</span>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </>
  );
}
