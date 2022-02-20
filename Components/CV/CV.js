import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import style from "../../styles/CV.module.css";
import { useTranslation } from "next-i18next";
export default function CV(props) {
  const { data, CVRef } = props;
  const { t } = useTranslation();

  const [isVisible, setVisible] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(CVRef.current);
    return () => observer.unobserve(CVRef.current);
  }, []);

  return (
    <section
      id="cv"
      ref={CVRef}
      className={`${style.cv}  ${isVisible ? "fadeIn" : ""}`}
    >
      <h1 className="titleSection line">
        <span>{t("CV")}</span>
      </h1>
      <h3 className={style.subtitleCV}>{t("MoreInfoCV")}</h3>
      <div className={style.downloadButtonDiv}>
        <Button
          onClick={() => {
            window
              .open(
                process.env.NEXT_PUBLIC_API_URL + data.CV.data.attributes.url,
                "_blank"
              )
              .focus();
          }}
          style={{ backgroundColor: "var(--green)", color: "var(--white)" }}
        >
          {t("Download")}
        </Button>
      </div>
    </section>
  );
}
