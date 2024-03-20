"use client";

import React,{ useRef } from 'react'
import { useScroll } from 'framer-motion';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useTransform } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

export default function Project(
  {
    title,
    description,
    tags,
    imageUrl
  }:ProjectProps
) {

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll(
    {
      target:ref,
      offset:["0 1", "1.33 1"]
    }
  )

  const scrollValue = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollValue,
        opacity: opacityValue
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="bg-gray-100 max-w-[45rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:even:pl-8 rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
        
      >
        <div
          className="py-4 px-5 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]"
        >
          <h3
            className="text-2xl font-semibold font-customValue"
          >{title}</h3>
          <p 
            className="mt-2 leading-relaxed text-gray-700 font-customValue dark:text-white/70"
          >{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag,index) =>(
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full font-customPop dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image 
          src={imageUrl} 
          alt="Project Images" 
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          group-hover:transition-all-ease
          group-even:group-hover:translate-x-3
          group-even:group-hover:-translate-y-3
          group-even:group-hover:rotate-2
          group-even:group-hover:transition-all-ease
          group-even:right-[initial] 
          group-even:-left-40"
        />
      </section>
    </motion.div>
  )
}


