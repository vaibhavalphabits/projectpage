// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";

import "../assets/scss/Global.scss";
import ProjectCard from "../components/card";
import Footer from "../components/Footer";
// import { Container } from "postcss";


export default function Dashboard() {
  return (
    <div className="Container">
      <Header />
      <div className="Content">
        <ProjectCard
          imageURL="https://images.pexels.com/photos/28199959/pexels-photo-28199959/free-photo-of-the-old-man-of-storr-skye-scotland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project Image"
        />
        <ProjectCard
          imageURL="https://images.pexels.com/photos/28288018/pexels-photo-28288018/free-photo-of-a-basketball-hoop-in-a-park-with-trees-and-bushes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project Image"
        />
        <ProjectCard
          imageURL="https://images.pexels.com/photos/28232669/pexels-photo-28232669/free-photo-of-autumn-garden-vibe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project Image"
        />
        <ProjectCard
          imageURL="https://images.pexels.com/photos/28232669/pexels-photo-28232669/free-photo-of-autumn-garden-vibe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project Image"
        />
        <ProjectCard
          imageURL="https://images.pexels.com/photos/28232669/pexels-photo-28232669/free-photo-of-autumn-garden-vibe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project Image"
        />
        <ProjectCard
          imageURL="https://images.pexels.com/photos/28232669/pexels-photo-28232669/free-photo-of-autumn-garden-vibe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project Image"
        />
        <ProjectCard
          imageURL="https://images.pexels.com/photos/28232669/pexels-photo-28232669/free-photo-of-autumn-garden-vibe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project Image"
        />
        <ProjectCard
          imageURL="https://images.pexels.com/photos/28232669/pexels-photo-28232669/free-photo-of-autumn-garden-vibe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project Image"
        />
      </div>

      <Footer />
    </div>
  );
}
