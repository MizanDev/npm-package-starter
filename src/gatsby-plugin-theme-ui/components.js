import React from "react"
import ProjectCard from "../components/project-card"
import InspireCard from "../components/inspire-card"

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
  InspireCard: ({ title, bg, children }) => (
    <InspireCard title={title} bg={bg}>
      {children}
    </InspireCard>
  ),
}

export default components

