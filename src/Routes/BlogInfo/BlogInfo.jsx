import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import blogBg from "../../assets/Images/heropng.png";
import ComunicationPage from "../../pages/ComunicationPage/ComunicationPage";
import { TfiArrowCircleDown } from "react-icons/tfi";
import "./BlogInfo.css";
import Fade from "react-reveal/Fade";
import LastBlog from "../../Components/LastBlog/LastBlog";
import { useTranslation } from "react-i18next";

function BlogInfo() {
  const { id } = useParams();
  const [blogInfo, setBlogInfo] = useState([]);
  const [t, i18next] = useTranslation();

  useEffect(() => {
    axios
      .get("https://api.alibaraka.com/api/blogs/")
      .then((res) => setBlogInfo(res?.data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <div className="blogInfoHeroSy">
        <div className="container">
          {blogInfo.map((inf) => {
            if (Number(id) === inf?.id) {
              return (
                <h1 className="topBlogTitle" key={inf?.id}>
                  {inf?.[`name_${i18next.language}`]}
                </h1>
              );
            }
          })}
          <div className="arrowIconBox">
            <a href="#blogInfoA">
            <TfiArrowCircleDown className="arrowIcon" />
            </a>
          </div>
        </div>
        <img className="blogPic" src={blogBg} alt="bg picture" />
      </div>
      <div className="blogInfoSy" id="blogInfoA">
        <div className="container">
          {blogInfo.map((data) => {
            if (Number(id) === data?.id) {
              return (
                <div className="blogInfoBox" key={data?.id}>
                  <Fade left>
                  <h3 className="blogInfoTetitle">{data?.[`name_${i18next.language}`]}</h3>
                  </Fade>
                  <Fade left>
                  <div className="blogAutherbox">
                    <p className="blogAuther">{data?.[`author_${i18next.language}`]}</p>
                    <span className="blogDate">{data?.date}</span>
                  </div>
                  </Fade>
                  <div className="blogInfoImg">
                    <Fade left>
                    <img
                      className="productPicture"
                      src={data?.image}
                      alt="picture"
                    />
                    </Fade>
                  </div>
                  <Fade left>
                  <p className="blogInfoText">{data?.[`description_${i18next.language}`]}</p>
                  </Fade>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="container">
        <Fade left>
        <LastBlog />
        </Fade>
        <Link
          to={"../moreBlog/"}
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            marginTop: "70px",
          }}
        >
          <button className="moreBlogButton">YANA BLOGLAR</button>
        </Link>
      </div>
      <ComunicationPage />
    </>
  );
}
export default BlogInfo;
