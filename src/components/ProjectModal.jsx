import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './ProjectModal.css'

const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
)
const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)
const YoutubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

export default function ProjectModal({ project, onClose, onPdf, onYoutube }) {
  const [imgIdx, setImgIdx] = useState(0)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="proj-modal-box"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 24 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={e => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="modal-header">
          <div className="pm-header-left">
            <div className="project-tags">
              {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <h2 className="modal-title">{project.title}</h2>
            
            {/* 메타데이터 */}
            <ul className="pm-meta">
              <li><strong>개발 기간:</strong> {project.period}</li>
              <li><strong>개발 인원:</strong> {project.team}</li>
              <li><strong>사용 엔진:</strong> {project.engine}</li>
            </ul>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="닫기">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* 본문 */}
        <div className="pm-body">
          {/* 이미지 갤러리 */}
          {project.images && project.images.length > 0 && (
            <div className="pm-gallery">
              <div className="pm-gallery-main">
                <motion.img
                  key={imgIdx}
                  src={project.images[imgIdx]}
                  alt={`${project.title} 스크린샷 ${imgIdx + 1}`}
                  className="pm-gallery-img"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              {project.images.length > 1 && (
                <div className="pm-gallery-thumbs">
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      className={`pm-thumb${i === imgIdx ? ' active' : ''}`}
                      onClick={() => setImgIdx(i)}
                    >
                      <img src={img} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 설명 */}
          <p className="pm-desc">{project.desc}</p>

          {/* 액션 버튼 */}
          <div className="pm-actions">
            {project.youtube && (
              <button className="btn btn-ghost" onClick={onYoutube}>
                <YoutubeIcon /> 영상 보기
              </button>
            )}
            {project.pdf && (
              <button className="btn btn-ghost" onClick={onPdf}>
                <EyeIcon /> 포트폴리오 보기
              </button>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <GitHubIcon /> GitHub
              </a>
            )}
            {project.wip && !project.pdf && !project.github && (
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                공개 예정
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
