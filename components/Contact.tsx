"use client";

import React from 'react'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa6'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {

  const { ref } = useSectionInView("Contact")

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] scroll-mt-24"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      viewport={{once:true}}
    >
      <SectionHeading>Contact</SectionHeading>
      <p 
        className="text-gray-700 font-customPop dark:text-white/80"
      >Please Contact me directly at <a className="underline" href="mailto:se.mangat.ram@gmail.com">se.mangat.ram@gmail.com</a> or through this form.</p>
      <form 
        className="mt-10 flex flex-col font-customPop dark:text-black"
        action={async (formData) => {
          console.log("Running on Client.");
          console.log(formData.get("senderEmail"));
          console.log(formData.get("message"));

          await sendEmail(formData)
        }}
      >
          <input 
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email" 
          name="senderEmail"
          placeholder="Your email"
          required
          maxLength={500}
          />
          <textarea 
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            placeholder="Your message"
            name="message"
            required
            maxLength={500}
          />
          <button 
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all
            focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 dark:bg-white dark:bg-opacity-10"
          >
            Submit
            <FaPaperPlane
              className="text-xs opacity-70 transition-all
              group-hover:translate-x-1
              group-hover:-translate-y-1"
            />{" "}
          </button>
      </form>
    </motion.section>
  )
}
