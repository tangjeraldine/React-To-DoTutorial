import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main>
      <header>
        <h3>Todoooossss!</h3>
      </header>
      <Outlet />
    </main>
  );
}

export default Layout;
