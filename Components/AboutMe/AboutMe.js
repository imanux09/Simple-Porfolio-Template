import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import style from "../../styles/AboutMe.module.css";
export default function AboutMe(props) {
  const { data, AboutRef } = props;
  const { t } = useTranslation();
  const [isVisible, setVisible] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(AboutRef.current);
    return () => observer.unobserve(AboutRef.current);
  }, []);

  return (
    <section
      id="aboutme"
      ref={props.AboutRef}
      className={`${style.about}  ${isVisible ? "fadeIn" : ""}`}
    >
      <h1 className="titleSection line">
        <span>{t("AboutMe")}</span>
      </h1>
      <div className={style.content}>
        <div className="box">
          <div className="boxInfo">
            <div>
              <h1 className="titleBox">{data.nameAbout}</h1>
            </div>
            <h3 className="subtitleBox">{data.subtitleAbout}</h3>
            <p className={style.aboutMeInfo}>
              {data.description.replace("\n", "\\n")}
            </p>
          </div>
        </div>
        <div className={style.imgBox}>
          <img
            className={style.imgPerson}
            src={
              process.env.NEXT_PUBLIC_API_URL + data.photo.data.attributes.url
            }
          ></img>
        </div>
      </div>
    </section>
  );
}
