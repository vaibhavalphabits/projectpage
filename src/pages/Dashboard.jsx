// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";

import ProjectCard from "../components/card";
import Footer from "../components/Footer";



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
          imageURL="https://images.pexels.com/photos/18923568/pexels-photo-18923568/free-photo-of-teapot-on-a-tree-trunk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project Image"
        />
        <ProjectCard
          imageURL="https://images.pexels.com/photos/9700693/pexels-photo-9700693.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Project Image"
        />
        <ProjectCard
          imageURL="https://images.pexels.com/photos/9704634/pexels-photo-9704634.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Project Image"
        />
        <ProjectCard
          imageURL="https://images.pexels.com/photos/227429/pexels-photo-227429.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Project Image"
        />
        <ProjectCard
          imageURL="https://images.pexels.com/photos/28085843/pexels-photo-28085843/free-photo-of-the-island-of-montenegro-is-surrounded-by-blue-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project Image"
        />
      </div>

      <Footer />
    </div>
  );
}
