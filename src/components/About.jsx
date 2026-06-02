import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' },
  }),
}

export default function About() {
  const [ref, inView] = useInView(0.2)

  return (
    <section id="about" className="about">
      <div className="container" ref={ref}>
        <motion.p className="section-label" variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          About
        </motion.p>
        <motion.h2 className="section-title" variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          소개
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-text"
            variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            <p>
              안녕하세요, 게임 클라이언트 개발자 <strong>이호진</strong>입니다.
            </p>
            <p>
              Unity · C#을 주 도구로 사용하며, 플레이어에게
              <strong> 기억에 남을 만한 게임</strong>을 만드는 것을 목표로 합니다.
              비유클리드 공간 구현, 절차적 생성, 독창적인 퍼즐 메커닉 등
              기술적 도전을 즐기고, 확장 가능한 아키텍처 설계에 집중합니다.
            </p>
            <p>
              개인 프로젝트로는 <em>Getting Over It</em>에서 영감을 받은
              <strong> 2D 하드코어 게임 Toritos</strong>를 제작 중입니다.
              단순하지만 고통스러운 조작 속에서 플레이어가 끊임없이 도전하게 만드는
              경험을 설계하는 데 집중하고 있으며, 스팀 출시를 목표로 합니다.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            variants={fadeUp} custom={3} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            {[
              { value: '6+', label: '완성 프로젝트' },
              { value: 'Unity', label: '주 엔진' },
              { value: 'C#', label: '주 언어' },
              { value: 'Steam', label: '출시 목표' },
            ].map(stat => (
              <div key={stat.label} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
