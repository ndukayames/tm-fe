import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import DashboardLayout from "./Layouts/DashboardLayout";
import MainLayout from "./Layouts/MainLayout";
import SingleTask from "./Pages/SingleTask";
import Tasks from "./Pages/Tasks";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Tasks />} />
          <Route path="/dashboard/task/:title" element={<SingleTask />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
