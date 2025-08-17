import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import RootLayout from "./pages/RootLayout";
import Blog from "./pages/Blog";
import Listingspage from "./pages/Listingspage";
import SignupPage from "./pages/SignupPage";
import { GlobalStyleBox } from "./styles/Global.styles";
import { loginFormAction, signupFormAction } from "./utils/authAction";
import Loginpage from "./pages/Loginpage";
import Neighborhoodspage from "./pages/Neighborhoodspage";
import "leaflet/dist/leaflet.css";
import ListingDetailspage from "./pages/ListingDetailspage";
import NeighborhoodDetailspage from "./pages/NeighborhoodDetailspage";

import { ListingsAction } from "./utils/ListingsAction";
// import { useAuthUser } from "./hooks/useAuthUser";
// import { useAutoSignOut } from "./hooks/useAutoSignOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/neighborhoods", element: <Neighborhoodspage /> },
      { path: "/listings", element: <Listingspage />, action: ListingsAction },
      { path: "/about", element: <Aboutpage /> },
      { path: "/contact", element: <Contactpage /> },
      { path: "/blog", element: <Blog /> },
      { path: "listing_details/:name", element: <ListingDetailspage /> },
      {
        path: "neighborhood_details/:name",
        element: <NeighborhoodDetailspage />,
      },
    ],
  },
  { path: "/signup", element: <SignupPage />, action: signupFormAction },
  { path: "/login", element: <Loginpage />, action: loginFormAction },
]);

function App() {
  // const { user } = useAuthUser();
  // useAutoSignOut(user);

  return (
    <>
      <GlobalStyleBox />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
