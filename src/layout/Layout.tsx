import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="sd:min-w-screen min-h-screen pt-14.25 sm:min-w-screen overflow-x-hidden sm:min-h-screen">
      <Header />
      <div className="flex flex-col justify-between items-center gap-37.5 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
