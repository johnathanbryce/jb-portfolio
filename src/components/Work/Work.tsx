import React from 'react'


type WorkProps = {
  setActiveContent: (content: string | null) => void;
}

export default function Work({setActiveContent}: WorkProps) {
  const workList = ['Romp', 'JB Web Dev', 'Julien Verschooris', 'Labridge Farms', 'SolLuna Essence'];

  return (
    <div>
      <h2> Work</h2>
      {workList.map((project, index) => (
        <p key={index} onClick={() => setActiveContent(project)}>
          {project}
        </p>
      ))}
    </div>
  )
}
