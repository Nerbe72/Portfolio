import { useEffect, useRef, useState } from 'react'

/**
 * IntersectionObserver 기반 훅
 * 요소가 뷰포트에 들어오면 inView = true가 됩니다.
 * @param {number} threshold - 0~1 사이의 가시성 비율
 */
export function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el) // 한 번만 트리거
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}
