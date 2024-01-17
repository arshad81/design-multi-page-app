import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Link,
  ScrollRestoration
} from "react-router-dom";
import "./index.css";
import App from "./App";
import WebDesign from "./pages/webDesign";
import AppDesign from "./pages/appDesign";
import GraphicDesign from "./pages/graphicDesign";
import reportWebVitals from "./reportWebVitals";
import About from "./pages/about";
import Location from "./pages/location";
import ContactUs from "./pages/contactUs";

export default function Index() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<App/>} />
    //     <Route path='webdesign' element={<WebDesign/>} />
    //     <Route path='appdesign' element={<AppDesign/>} />
    //     <Route path='graphicdesign' element={<GraphicDesign/>} />
    //     <Route path='about' element={<About/>}/>
    //     <Route path='location' element={<Location/>}/>
    //     <Route path='contactUs' element={<ContactUs/>}/>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider
      router={
        createBrowserRouter([
        {
          path: "/",
          element: <App />,
        },
        {
          path: "/webdesign",
          element: <WebDesign />,
        },
        {
          path: "appdesign",
          element: <AppDesign />,
        },
        {
          path: "graphicsdesign",
          element: <GraphicDesign />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "location",
          element: <Location />,
        },
        {
          path: "contactus",
          element: <ContactUs />,
        },
      ])}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
