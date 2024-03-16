"use client";

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
      <motion.p 
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity:0, y: 100 }}
        animate={{ opacity:1, y:0 }}
      >
          <span className="font-bold">Hello I&apos;m Mangat.</span>I&apos;m a{" "}
          <span className="font-bold">Full Stack Engineer and Dev</span> with{" "}
          <span className="font-bold">1 year</span> of experience.I enjoy building
          <span className="italic"> Sites and Apps</span>. My Focus is{" "}
          <span className="underline">NodeJs,ExpressJs and React.</span>
      </motion.p>
      <div>
        <Link 
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Contact Me Here
          <BsArrowRight />
        </Link>
        <a 
          href=""
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Download CV
          <HiDownload />
        </a>
      </div>

    </section>
  )
}
