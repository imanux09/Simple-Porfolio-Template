import React, { useEffect, useState } from "react";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { IconButton, Tooltip } from "@mui/material";

import style from "../../styles/Projects.module.css";
import { useTranslation } from "next-i18next";
export default function Projects(props) {
  const { data } = props;
  const { t } = useTranslation();

  const [isVisible, setVisible] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(props.ProjectsRef.current);
    return () => observer.unobserve(props.ProjectsRef.current);
  }, []);

  return (
    <section
      id="proyects"
      ref={props.ProjectsRef}
      className={`${style.projects}  ${isVisible ? "fadeIn" : ""}`}
    >
      <h1 className="titleSection line">
        <span>{t("Projects")}</span>
      </h1>
      {data.projects.data.map((project, i) => {
        return (
          <div
            key={i}
            className={`${style.content} ${i != 0 ? style.margin : ""}`}
          >
            <div className="box">
              <div className="boxInfo">
                <div>
                  <h1 className="titleBox">{project.attributes.name}</h1>
                </div>
                <h3 className="subtitleBox">{project.attributes.subtitle}</h3>
                <ul className={style.tools}>
                  {project.attributes.tools.data.map((tools, j) => {
                    return <li key={j}>{tools.attributes.name}</li>;
                  })}
                </ul>
              </div>
              <div className={style.buttonGroup}>
                {project.attributes.demo ? (
                  <Tooltip title="Demo">
                    <IconButton
                      onClick={() => {
                        window.open(project.attributes.demo, "_blank").focus();
                      }}
                    >
                      <SlideshowIcon style={{ color: "white" }}></SlideshowIcon>
                    </IconButton>
                  </Tooltip>
                ) : (
                  <></>
                )}
                {project.attributes.documentation ? (
                  <Tooltip title="Documentación">
                    <IconButton
                      onClick={() => {
                        window
                          .open(project.attributes.documentation, "_blank")
                          .focus();
                      }}
                    >
                      <ImportContactsIcon
                        style={{ color: "white" }}
                      ></ImportContactsIcon>
                    </IconButton>
                  </Tooltip>
                ) : (
                  <></>
                )}
                {project.attributes.github ? (
                  <Tooltip title="GitHub">
                    <IconButton>
                      <ImportContactsIcon
                        style={{ color: "white" }}
                      ></ImportContactsIcon>
                    </IconButton>
                  </Tooltip>
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div className={style.imgBoxprojects}>
              <img
                className={style.imgprojects}
                src={
                  process.env.NEXT_PUBLIC_API_URL +
                  project.attributes.photo.data.attributes.url
                }
              ></img>
            </div>
          </div>
        );
      })}
    </section>
  );
}
