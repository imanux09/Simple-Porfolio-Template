import { Button } from "@mui/material";
import React from "react";
import style from "../../styles/Introduction.module.css";
import { useWindowSize } from "../../Hooks/windowSize/windowSize";
import { useTranslation } from "next-i18next";

export default function Introduction(props) {
  const { data } = props;
  const { t } = useTranslation("common");
  const size = useWindowSize();
  return (
    <section
      ref={props.IntroductionRef}
      style={{ height: size.height ?? 992 + "px" }}
      className={style.frist}
    >
      <div className={style.mainInfo}>
        <h3 className={style.welcomeMsg}>{t("Welcome")}</h3>
        <h1 className={style.title}>{data.mainTitle}</h1>
        <h2 className={style.subtitle}>{data.mainSubtitle}</h2>
        <div className={style.buttonDiv}>
          <Button
            className={style.moreInfoButton}
            onClick={() =>
              props.AboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            <svg className={style.rows}>
              <polygon
                className="arrow-top"
                points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
              />
              <polygon
                className="arrow-middle"
                points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
              />
              <polygon
                className="arrow-bottom"
                points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
