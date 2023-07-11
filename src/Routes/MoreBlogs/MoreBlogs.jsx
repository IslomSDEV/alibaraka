import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import "./MoreBlog.css";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";
import ComunicationPage from "../../pages/ComunicationPage/ComunicationPage";

function MoreBlogs() {
  const [moreBlog, setMoreBlog] = useState([]);
  const [t, i18next] = useTranslation();

  useEffect(() => {
    axios
      .get("https://api.alibaraka.com/api/blogs/")
      .then((res) => setMoreBlog(res?.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
    <Home/>
      <div className="moreBlogsSy">
        <div className="container">
          <Fade left>
          <h3 className="moreBlogTitle">{t("blogInfoMore")}</h3>
          </Fade>
          <div className="moreBlogflex">
            {moreBlog.map((data) => {
              return (
                <Fade left key={data?.id}>
                  <Link style={{textDecoration: "none"}} to={`/blogInfo/${data?.id}`} >
                  <div className="moreBlogCards">
                    <div className="moreBlogPic">
                        <img className="blogsImages" src={data?.image} alt="blogs img" />
                    </div>
                    <div className="moreBlogTitleAndText">
                        <h4 className="moreBlogCardTitle">{data[`name_${i18next.language}`]}</h4>
                        <p className="moreBlogDescription">{data[`description_${i18next.language}`]}</p>
                    </div>
                  </div>
                </Link>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
      <ComunicationPage />
    </>
  );
}

export default MoreBlogs;
