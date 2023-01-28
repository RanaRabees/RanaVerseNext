import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/Router";
import Navbar from "../components/Navbar";
export default function Home() {
  const router = useRouter();
  // const Link = Link();
  const aboutusgo = () => {
    router.push("/aboutus");
    alert("Do You Want To Know Aboutus");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>RanaVerse</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

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

      <main>
        <Image
          src="/back.jpg"
          alt="back"
          width={200}
          height={200}
          className={styles.backLogo}
          priority
        />
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://ranarabees.pythonanywhere.com/">RanaVerse!</a>
        </h1>
        <Image
          src="/rana.jpg"
          alt="back"
          width={200}
          height={200}
          className={styles.backLogo}
          priority
        />
        <p className={styles.description}>
          Rana <code>Muhammad </code>Rabees <code>Hussain</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.facebook.com/profile.php?id=100088975870807"
            className={styles.card}
          >
            <h3>FaceBook &rarr;</h3>
            <p>Follow Us On FaceBook.</p>
          </a>

          <a
            href="https://www.youtube.com/@RanaVerse786/featured"
            className={styles.card}
          >
            <h3>Youtube &rarr;</h3>
            <p>Subscribe Us On Youtube!</p>
          </a>

          <a href="https://discord.com/invite/ds2ZzR6C" className={styles.card}>
            <h3>Discord &rarr;</h3>
            <p>Join Our Discord Server .</p>
          </a>

          <a
            href="https://www.linkedin.com/in/rana-rabees-064830251/"
            className={styles.card}
          >
            <h3>LinkdIn &rarr;</h3>
            <p>Follow Us On LinkdIn .</p>
          </a>
          {/* <Link href="./aboutus.js"> */}
          <a className={styles.card} onClick={aboutusgo}>
            {/* <Link href="/aboutus"> */}
            <h3>About Us &rarr;</h3>
            {/* </Link> */}

            <p>Do You Know About Us.</p>
          </a>

          {/* </Link> */}
        </div>
      </main>

      <footer>
        <a
          href="https://ranarabees.pythonanywhere.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" RanaVerse "}
          <img src="/favicon.png" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        .backLogo {
          border-radius: 50%;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        mynav {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: darkgoldenrod;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: darkgoldenrod;
          border-radius: 15%;
        }

        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: darkkhaki;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        code:before,
        code:after {
          content: "";

          box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.34),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px rgba(0, 0, 0, 0.12);
        }
      `}</style>

      <style jsx global>{`
        .backLogo {
          border-radius: 50%;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
