import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function Reveal({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true})

    const mainControls = useAnimation();


    useEffect(() => {
      if (isInView) {
        mainControls.start("visible");
      }
      //eslint-disable-next-line
    },[isInView])

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: {
            y: 75,
            opacity: 0,
          },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        // transition={{ type: "spring", stiffness: 20, when: "beforeChildren" }}
        transition={{ duration: 0.8, type: "tween", when: "beforeChildren" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
