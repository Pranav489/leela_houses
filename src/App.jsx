import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/ErrorPages/NotFound";
import HomePage from "./pages/More/HomePage";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import BlogPage from "./pages/Blog/BlogPage";
import BlogDetailsPage from "./pages/Blog/BlogDetailsPage";
import GalleryPage from "./pages/More/GalleryPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="/services" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
