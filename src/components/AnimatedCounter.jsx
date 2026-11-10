import { useRef } from 'react'
import * as ReactCountUpModule from 'react-countup'
import { useInView, useReducedMotion } from 'motion/react'

const CountUp = ReactCountUpModule.default?.default || ReactCountUpModule.default || ReactCountUpModule.CountUp || ReactCountUpModule

export default function AnimatedCounter({ end, duration = 2, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const reduceMotion = useReducedMotion()
  const settled = inView || reduceMotion

  // The finished value is always in the markup, so nothing stays hidden if the
  // observer never fires or the reader asks for reduced motion.
  return (
    <span ref={ref}>
      {settled ? (
        <CountUp end={end} duration={reduceMotion ? 0 : duration} prefix={prefix} suffix={suffix} />
      ) : (
        `${prefix}${end}${suffix}`
      )}
    </span>
  )
}
