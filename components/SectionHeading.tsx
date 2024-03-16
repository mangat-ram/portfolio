import React from 'react'

type SectionHeadingProps = {
  children:React.ReactNode;
};

export default function SectionHeading( {children}: SectionHeadingProps ){
  return (
    <h2
      className="text-3xl mb-3 font-medium capitalize font-customValue"
    >
      {children}
    </h2>
  )
}
