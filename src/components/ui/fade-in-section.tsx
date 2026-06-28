"use client"

import { useRef, useEffect, useState } from "react"

type Props = {
  children: React.ReactNode
  className?: string
  as?: "section" | "div"
}

export function FadeInSection({ children, className = "", as: Tag = "section" }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hasJs, setHasJs] = useState(false)

  useEffect(() => {
    setHasJs(true)
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`transition-all duration-350 ease-out will-change-transform ${
        hasJs ? (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2") : "opacity-100 translate-y-0"
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
