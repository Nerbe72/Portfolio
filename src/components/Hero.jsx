import { motion } from 'framer-motion'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* 배경 그리드 */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-content">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Game Client Developer
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          이호진
        </motion.h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Unity · C# 기반으로 확장 가능한 게임 시스템을 설계하고 개발합니다.
          <br />
          독창적인 메커닉과 플레이어 경험에 집중합니다.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          <a href="#projects" className="btn btn-primary">프로젝트 보기</a>
          <a href="#contact" className="btn btn-ghost">연락하기</a>
        </motion.div>

        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="scroll-line" />
          <span className="scroll-label">스크롤</span>
        </motion.div>
      </div>
    </section>
  )
}
