"use client";

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Intro() {

  const { ref } = useSectionInView("Home",0.5)
  const { setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <section className="-mt-8 mb-28 max-w-[50rem] text-center sm:mb-0 font-customPop scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity:0,scale:0}}
            animate={{ opacity:1,scale:1}}
            transition={{
              type:"tween",
              duration:0.25
            }}
          >
            <Image 
              src="/GitHubProfile.jpg" 
              alt="Git Profile"
              width={192}
              height={192}
              quality={95} 
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span 
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity:0,scale:0}}
            animate={{ opacity:1,scale:1}}
            transition={{
              type:"spring",
              stiffness:125,
              delay:0.1,
              duration:0.7
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1 
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity:0, y: 100 }}
        animate={{ opacity:1, y:0 }}
      >
          <span className="font-bold">Hello I&apos;m Mangat.</span>I&apos;m a{" "}
          <span className="font-bold">Full Stack Engineer and Dev</span> with{" "}
          <span className="font-bold">1 year</span> of experience.I enjoy building
          <span className="italic"> Sites and Apps</span>. My Focus is{" "}
          <span className="underline">NodeJs,ExpressJs and React.</span>
      </motion.h1>
      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y:100 }}
        animate={{ opacity: 1, y:0 }}
        transition={{
          delay:0.1
        }}
      >
        <Link 
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-900 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact"),
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact Me Here
          <BsArrowRight 
            className="opacity-70 group-hover:translate-x-1 transition"
          />
        </Link>
        <a 
          href=""
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
        >
          Download CV
          <HiDownload 
            className="opacity-60 group-hover:translate-y-1 transition"
          />
        </a>
        <a 
          href=""
          className="bg-white px-4 py-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a 
          href=""
          className="bg-white px-4 py-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
