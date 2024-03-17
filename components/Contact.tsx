import React from 'react'
import SectionHeading from './SectionHeading'
import { FaPaperPlane } from 'react-icons/fa6'

export default function Contact() {
  return (
    <section
      id="contact"
    >
      <SectionHeading>Contact</SectionHeading>
      <p>Please Contact me directly at <a className="underline" href="mailto:se.mangat.ram@gmail.com">se.mangat.ram@gmail.com</a> or through this form.</p>
      <form action="">
        <input type="email" />
        <textarea />
        <button type="submit">
          Submit
          <FaPaperPlane />
        </button>
      </form>
    </section>
  )
}
