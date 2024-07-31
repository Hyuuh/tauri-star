import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-dvh h-dvh w-dvw overflow-hidden">
      <Outlet />
    </div>
  );
}

export default MainLayout;
