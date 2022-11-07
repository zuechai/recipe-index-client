import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
