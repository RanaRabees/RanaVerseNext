import React from "react";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/Router";

export default function Navbar() {
  const router = useRouter();
  // const Link = Link();
  const aboutusgo = () => {
    router.push("/aboutus");
    alert("Do You Want To Know Aboutus");
  };

  return (
    <footer className={styles.mynav}>
      <a
        href="https://ranarabees.pythonanywhere.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {"  "}
        <img src="/favicon.png" alt="RanaVerse" className={styles.navlogo} />
      </a>
      <br />
      <button className={styles.mainbtn}>
        <a onClick={() => router.push("/")} target="_blank">
          {" "}
          Main
        </a>
      </button>

      <button className={styles.mainbtn}>
        <a onClick={() => router.push("/home")} target="_blank">
          {" "}
          Home
        </a>
      </button>

      <button className={styles.mainbtn}>
        <a onClick={() => router.push("/contact")} target="_blank">
          {" "}
          Contact
        </a>
      </button>

      <button className={styles.mainbtn}>
        <a onClick={() => router.push("/aboutus")} target="_blank">
          {" "}
          About_Us
        </a>
      </button>

      <button className={styles.mainbtn}>
        <a onClick={() => router.push("/blogs")} target="_blank">
          {" "}
          Blogs
        </a>
      </button>
    </footer>
  );
}
