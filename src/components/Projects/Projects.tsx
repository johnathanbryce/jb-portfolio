import React from 'react'

type ProjectsProps = {
  setActiveContent: (content: string | null) => void;
}

export default function Projects({setActiveContent}: ProjectsProps) {
  const projectList = ['Fit Friends', 'MyTube', 'Dice Game'];

  return (
    <div>
      <h2> Projects</h2>
      {projectList.map((project, index) => (
        <p key={index} onClick={() => setActiveContent(project)}>
          {project}
        </p>
      ))}
    </div>
  )
}
