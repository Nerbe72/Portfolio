import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './YoutubeModal.css'

// youtu.be/ID 또는 youtube.com/watch?v=ID 형태를 embed URL로 변환
function getEmbedUrl(url) {
  let id = ''
  try {
    const u = new URL(url)
    if (u.hostname === 'youtu.be') {
      id = u.pathname.slice(1)
    } else {
      id = u.searchParams.get('v') || ''
    }
  } catch {}
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null
}

export default function YoutubeModal({ url, title, onClose }) {
  const embedUrl = getEmbedUrl(url)

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
        className="yt-modal-box"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 className="modal-title">{title} — 영상</h2>
          <div className="modal-header-actions">
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.8rem' }}>
              YouTube에서 열기
            </a>
            <button className="modal-close" onClick={onClose} aria-label="닫기">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="yt-body">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="yt-frame"
            />
          ) : (
            <p style={{ color: 'var(--text-secondary)', padding: '2rem' }}>영상을 불러올 수 없습니다.</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
