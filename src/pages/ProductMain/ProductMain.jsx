import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroPng from "../../assets/Images/heropng.png";
import treePng from "../../assets/Images/tree.png";
import "./ProductMain.css";
import Fade from "react-reveal/Fade";
import { useTranslation } from "react-i18next";

function ProductMain() {
  const [category, setCategory] = useState([]);
  const [t,i18next] = useTranslation()
  

  useEffect(() => {
    axios
      .get("https://api.alibaraka.com/api/categories/")
      .then((res) => setCategory(res?.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <div className="MiniproductSy">
        <img className="heroPic" src={heroPng} />
        <div className="container">
          <h2 className="heroTitle" id="products">{t("product_title")}</h2>
          <p className="heroParag">
            {t("product_desc")}
          </p>
          <div className="heroProductFlex">
            {category.map((data) => {
              return (
                <Fade left key={data.id}>
                  <Link
                  to={`/products/${data.id}`}
                  style={{ textDecoration: "none", color: "#000000c0" }}
                >
                  <div className="heroProduct">
                    <div className="heroProductImg">
                      <img
                        className="heroMiniProductImg"
                        src={data.image}
                        alt="picture"
                      />
                    </div>
                    <div className="heroProductDesc">
                      <h3 className="heroProductTitle">{data[`name_${i18next.language}`]}</h3>
                      <p className="heroProductInfo">{data[`text_${i18next.language}`]}</p>
                    </div>
                  </div>
                </Link>
                </Fade>
              );
            })}
          </div>
        </div>
        <img className="treePng" src={treePng} alt="tree png image" />
      </div>
    </>
  );
}

export default ProductMain;
