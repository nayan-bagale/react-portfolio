import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function Child({children}, props) {
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
    <div ref={ref} key={props.key || null}>
      <motion.div
        variants={{
          hidden: {
            y: 75,
            opacity: 0,
          },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        whileInView='visible'
        transition={{ duration: 0.4, type: "tween" }}
        viewport={{ once: true, amount: 0.4}}
      >
        {children}
      </motion.div>
      </div>
  );
}
