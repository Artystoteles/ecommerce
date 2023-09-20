import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.footerInformation}>
          <h2>Fniro.</h2>
          <p>
            400 University Drive Suite 200 Coral <br /> Gables, FL 33134 USA
          </p>
        </div>
        <div className={styles.footerLinks}>
          <span className={styles.footerSpan}>Link</span>
          <a className={styles.footerLink} href="/">
            <span>Home</span>
          </a>
          <a className={styles.footerLink} href="/shop">
            <span>Shop</span>
          </a>
          <a className={styles.footerLink} href="/blog">
            <span>Blog</span>
          </a>
          <a className={styles.footerLink} href="/contact">
            <span>Contact</span>
          </a>
        </div>
        <div className={styles.footerHelp}>
          <span className={styles.footerSpan}>Help</span>
          <a className={styles.footerLink} href="/">
            <span>Payment Options</span>
          </a>
          <a className={styles.footerLink} href="/">
            <span>Returns</span>
          </a>
          <a className={styles.footerLink} href="/">
            <span>Privacy Policies</span>
          </a>
        </div>
        <div className={styles.footerNewsletter}>
          <span className={styles.footerSpan}>Newsletter</span>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="Enter Your Email Address" />
            <input type="submit" value="SUBSCRIBE" />
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
