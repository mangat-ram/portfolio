"use client";

import React,{useEffect} from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { useSectionInView } from '@/lib/hooks';


export default function Projects() {

  const { ref } = useSectionInView("Projects",0.5)

  return (
    <section
      className="scroll-mt-28"
      id="projects"
      ref={ref}
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
          projectsData.map((project,index) => (
            <React.Fragment key={index}>
              <Project {...project}/>
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}

