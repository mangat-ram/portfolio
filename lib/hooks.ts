import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import type { SectionName } from "./types";


export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView(
    {
      threshold,
    }
  );

  useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000){
      setActiveSection(sectionName)
    }
  },[inView,setActiveSection,timeOfLastClick,sectionName])

  return {
    ref
  }
}