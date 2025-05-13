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

export default function Home() {
  return (
    <div className={styles.container}>

        <Firstpage />



  
    </div>


  );
}
