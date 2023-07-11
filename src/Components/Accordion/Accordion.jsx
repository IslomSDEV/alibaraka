import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import "./Accordion.css";
import { useTranslation } from "react-i18next";

export default function SimpleAccordion() {
  const [accordionData, setAccordionData] = useState([]);
  const [t, i18next] = useTranslation();
  useEffect(() => {
    axios
      .get("https://api.alibaraka.com/api/questions/")
      .then((res) => setAccordionData(res?.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
      {accordionData.map((data) => {
        return (
          <Accordion
            className={`accardionSy`}
            key={data?.id}
            style={{boxShadow: "none", border: "none"}}
          >
            <AccordionSummary className="accordionQuestion"  style={{border: "none"}}>
              <Typography
                style={{
                  width: "100%",
                  fontSize: "16px",
                  fontWeight: "800",
                }}
                className={`${data?.id % 2 ? "accardionTitleyellow" : null} accardionGreen`}
              >
                {data[`question_${i18next.language}`]} {" "}
              </Typography>
              <AddIcon id="plusIcon" style={{ fontSize: "30px", color: "rgba(3, 123, 53, 1)", transition: "1s all" }} />
            </AccordionSummary>
            <AccordionDetails style={{boxShadow: "none"}} className={`${data?.id % 2 ? "accardionTitleyellow" : null} accardionGreen`} >
              <Typography style={{boxShadow: "none"}}>{data[`answer_${i18next.language}`]}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}
