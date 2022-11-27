import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
