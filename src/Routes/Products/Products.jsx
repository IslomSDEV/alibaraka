import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AboutCompany from "../../pages/AboutCompany/AboutCompany";
import AccardionPage from "../../pages/AccardionPage/AccardionPage";
import ComunicationPage from "../../pages/ComunicationPage/ComunicationPage";
import StoreCom from "../../pages/StoreCom/StoreCom";
import SwiperHero from "../../pages/SwiperHero/SwiperHero";
import Fade from "react-reveal/Fade";
import "./Products.css";
import { useTranslation } from "react-i18next";
function Products() {
  const { id } = useParams();
  const [byCategory, setByCategory] = useState([]);
  const [t, i18next] = useTranslation()

  useEffect(() => {
    axios
      .get("https://api.alibaraka.com/api/product_by_category/")
      .then((res) => setByCategory(res?.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="ourProductsy" id="prd">
        <div className="container">
          <Fade left>
            <h2 className="ourProductsTitlr">{t("product_title")}</h2>
          </Fade>
          <Fade left>
            <span className="productSpanText">Change Product</span>
          </Fade>
          <div className="ourProductsFlex">
            {byCategory.map((data) => {
              if (Number(id) === data?.category) {
                return (
                  <Link
                    className="producstLink"
                    key={data?.id}
                    to={`/proInfo/${data?.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Fade left>
                      <div className="productCard">
                        <div className="productImg">
                          <img
                            className="productsPicture"
                            src={data.image1}
                            alt="mahsulot rasmi"
                          />
                        </div>
                        <h4 className="productName">{data?.[`name_${i18next.language}`]}</h4>
                        <span className="productPrice">
                          {t("productPrice")}
                        </span>
                      </div>
                    </Fade>
                  </Link>
                );
              }
            })}
            <div className="btnBoxForProductPage">
              <Link className="proPageBtn">Barchasini korish</Link>
            </div>
          </div>
        </div>
      </div>

      <AboutCompany />
      <SwiperHero />
      <AccardionPage />
      <StoreCom />
      <ComunicationPage />
    </>
  );
}

export default Products;
