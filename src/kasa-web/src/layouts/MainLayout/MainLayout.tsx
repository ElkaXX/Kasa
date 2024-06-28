import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="main-layout__content">
        <Container>
          <Header />

          <main className="main-layout__page">
            <Outlet />
          </main>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
