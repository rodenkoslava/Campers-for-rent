import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Suspense } from "react";
import { Container } from "../../styles/GlobalStyles";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
