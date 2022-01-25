import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import App from "./App";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
//import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout"

ReactDOM.render(
  <BrowserRouter>
  <Layout>
    <Routes>
      <Route exact path="/" element={<AllMeetupsPage />} />
      <Route exact path="/new-meetup" element={<NewMeetupPage />} />
      <Route exact path="/favorites" element={<FavoritesPage />} />
    </Routes>
    </Layout>
  </BrowserRouter>,

  document.getElementById("root")
);
