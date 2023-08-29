import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        <h1>Root Layout</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}
