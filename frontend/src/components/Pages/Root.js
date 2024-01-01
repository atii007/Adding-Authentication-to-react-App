import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation";

function Layout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
