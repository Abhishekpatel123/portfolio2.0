import React from "react";
import Project from "../Components/Project";
import { projects } from "../db";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div
        //className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10"
        >
          {React.Children.toArray(
            projects.map(
              ({
                title,
                tech_usages,
                description,
                liveLink,
                githubLink,
                images,
              }) => (
                <Project
                  title={title}
                  tech_usages={tech_usages}
                  description={description}
                  liveLink={liveLink}
                  githubLink={githubLink}
                  images={images}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;