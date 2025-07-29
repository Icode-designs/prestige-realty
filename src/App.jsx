import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/contactpage";
import RootLayout from "./pages/RootLayout";
import Blog from "./pages/Blog";
import Categoriespage from "./pages/Categoriespage";
import Listingspage from "./pages/Listingspage";
import SignupPage from "./pages/SignupPage";
import { GlobalStyleBox } from "./styles/Global.styles";
import { loginFormAction, signupFormAction } from "./utils/authAction";
import Loginpage from "./pages/Loginpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/categories", element: <Categoriespage /> },
      { path: "/listings", element: <Listingspage /> },
      { path: "/about", element: <Aboutpage /> },
      { path: "/contact", element: <Contactpage /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
  { path: "/signup", element: <SignupPage />, action: signupFormAction },
  { path: "/login", element: <Loginpage />, action: loginFormAction },
]);

function App() {
  return (
    <>
      <GlobalStyleBox />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
