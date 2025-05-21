import Image from "next/image";
import styles from "./page.module.css";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import Events from "./components/Events/Events";
import Customers from "./components/Customers/Customers";
import Experiences from "./components/Experiences/Experiences";
import Corner from "./components/Corner/Corner";
import Firstpage from "./components/Firstpage/Firstpage";
import Secontpage from "./components/Secondpage/Secondpage";
import Thirdpage from "./components/Thirdpage/Thirdpage";
import Fourthpage from "./components/Fourthpage/Fourthpage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Firstpage />
      <div className={styles.long}></div>
      <Secontpage />
      <Thirdpage />
      <div className={styles.long}></div>
      <Fourthpage />
    </div>


  );
}
