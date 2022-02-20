import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import style from "../../styles/Contact.module.css";
import { useTranslation } from "next-i18next";

export default function Contact(props) {
  const { ContactRef, data } = props;

  const { t } = useTranslation();
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(ContactRef.current);
    return () => observer.unobserve(ContactRef.current);
  }, []);

  return (
    <section
      id="contact"
      ref={ContactRef}
      className={`${style.Contact}  ${isVisible ? "fadeIn" : ""}`}
    >
      <h1 className="titleSection line">
        <span>{t("Contact")}</span>
      </h1>

      <h3 className={style.subtitleContact}>{t("MoreInfoContact")}</h3>
      <div className={style.buttonContactGroup}>
        {data.email ? (
          <IconButton
            onClick={() => {
              window.open("mailto: " + data.email, "_blank").focus();
            }}
            style={{ backgroundColor: "var(--light-green)" }}
          >
            <MailOutlineIcon></MailOutlineIcon>
          </IconButton>
        ) : (
          <></>
        )}

        {data.linkedinUrl ? (
          <IconButton
            onClick={() => {
              window.open(data.linkedinUrl, "_blank").focus();
            }}
            style={{ backgroundColor: "var(--light-green)" }}
          >
            <LinkedInIcon></LinkedInIcon>
          </IconButton>
        ) : (
          <></>
        )}
        {data.gitHubUrl ? (
          <IconButton
            onClick={() => {
              window.open(data.gitHubUrl, "_blank").focus();
            }}
            style={{ backgroundColor: "var(--light-green)" }}
          >
            <GitHubIcon></GitHubIcon>
          </IconButton>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
