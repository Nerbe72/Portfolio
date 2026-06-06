import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Footer.css'

export default function Footer() {
  const [ref, inView] = useInView(0.3)

  return (
    <footer id="contact" className="footer">
      <div className="container footer-inner" ref={ref}>
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Contact</p>
          <h2 className="footer-heading">함께할 수 있기를 기대합니다.</h2>
          <p className="footer-sub">
            게임 개발, 협업, 또는 궁금한 것이 있다면 언제든지 연락해주세요.
          </p>

          <div className="footer-links">
            <a href="mailto:nerb0702@gmail.com" className="footer-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              nerb0702@gmail.com
            </a>
            <a href="tel:01021272107" className="footer-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              010-2127-2107
            </a>
            <a
              href="https://github.com/Nerbe72"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </motion.div>

        {/* === [원본 코드 보관 (되돌릴 땐 아래 주석 해제)] ===
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span>© 2025 이호진. All rights reserved.</span>
          <span className="footer-made">Built with Vite + React</span>
        </motion.div>
        ==================================================== */}

        {/* 아멜리아 왓슨 이스터에그 추가 버전 */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span>© 2025 이호진. All rights reserved.</span>
          <span className="footer-made">Built with Vite + React</span>
        </motion.div>

        {/* 이스터에그 전용 컨테이너 (더 아래로) */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.5rem', marginTop: '1.8rem', paddingBottom: '1.5rem' }}>
          
          {/* 아멜리아 왓슨 모자 */}
          <div className="ame-easter-egg" title="Hic!" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g transform="rotate(45, 50, 50)">
                {/* Handle (Dark Brown / Black) */}
                <rect x="44" y="52" width="12" height="35" rx="2" fill="#2d2522" stroke="#1a1513" strokeWidth="1"/>
                
                {/* Gold Pommel at bottom of handle */}
                <rect x="43" y="85" width="14" height="6" rx="2" fill="#d4af37" stroke="#b8860b" strokeWidth="1.5"/>
                <rect x="44" y="86" width="12" height="2" fill="#ffe066" opacity="0.6"/>
                
                {/* Outer Rim (Gold) */}
                <circle cx="50" cy="25" r="26" fill="#d4af37" stroke="#b8860b" strokeWidth="2"/>
                <circle cx="50" cy="25" r="23" fill="#ffd700"/>
                
                {/* Lens (White with blue tint) */}
                <circle cx="50" cy="25" r="21" fill="#f4fbfd" stroke="#b8860b" strokeWidth="1"/>
                
                {/* Lens Reflection (Diagonal cut across lens) */}
                <path d="M 33 13 Q 50 30 50 46 A 21 21 0 0 0 70 18 Q 50 5 33 13 Z" fill="#e0f4f8" opacity="0.6"/>
                <path d="M 35 15 A 17 17 0 0 1 65 15" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
                
                {/* Mustache (Gold Collar directly connecting rim and handle) */}
                <path d="M 32 47 C 36 44, 45 44, 50 49 C 55 44, 64 44, 68 47 C 64 54, 55 54, 50 51 C 45 54, 36 54, 32 47 Z" fill="#ffd700" stroke="#b8860b" strokeWidth="1.5" strokeLinejoin="round"/>
                
                {/* Highlight on Mustache */}
                <path d="M 36 48 Q 45 46 48 50" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
                <path d="M 64 48 Q 55 46 52 50" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
              </g>
            </svg>
          </div>

          {/* 다크소울 화톳불 */}
          <div className="bonfire-easter-egg" title="Farewell, Ashen One." style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Ash and Bones at base */}
              <path d="M 15 80 Q 50 70 85 80 Q 50 95 15 80 Z" fill="#2a2a2a" />
              <path d="M 20 78 Q 50 68 80 78 Q 50 88 20 78 Z" fill="#3a3a3a" />
              {/* Skulls and bones embedded in ash */}
              <circle cx="35" cy="75" r="4" fill="#888"/>
              <circle cx="42" cy="78" r="3" fill="#777"/>
              <circle cx="65" cy="74" r="5" fill="#888"/>
              <circle cx="58" cy="79" r="4" fill="#666"/>
              <path d="M 63 72 Q 65 69 67 72" stroke="#ccc" strokeWidth="1.5" fill="none"/>
              <path d="M 33 73 Q 35 71 37 73" stroke="#ccc" strokeWidth="1.5" fill="none"/>
              
              {/* Back Flames */}
              <path d="M 30 80 C 20 55 40 35 50 15 C 60 35 80 55 70 80 Z" fill="#e65100" opacity="0.8"/>
              <path d="M 35 82 C 30 65 45 45 50 30 C 55 45 70 65 65 82 Z" fill="#ff9800" opacity="0.9"/>
              
              {/* Coiled Sword */}
              <path d="M 35 30 L 65 30 L 63 34 L 37 34 Z" fill="#2a2a2a"/> {/* Guard */}
              <path d="M 46 10 L 54 10 L 52 30 L 48 30 Z" fill="#1a1a1a"/> {/* Handle */}
              <circle cx="50" cy="8" r="4" fill="#2a2a2a"/> {/* Pommel */}
              
              {/* Sword Blade (Coiled Base) */}
              <path d="M 46 34 L 54 34 L 52 50 L 48 50 Z" fill="#222"/>
              <path d="M 47 50 L 53 50 L 51 65 L 49 65 Z" fill="#1a1a1a"/>
              <path d="M 48 65 L 52 65 L 50 80 Z" fill="#111"/>
              
              {/* Coils overlapping */}
              <path d="M 44 38 Q 50 43 56 36" fill="none" stroke="#4a4a4a" strokeWidth="3" strokeLinecap="round"/>
              <path d="M 45 48 Q 50 53 55 46" fill="none" stroke="#4a4a4a" strokeWidth="3" strokeLinecap="round"/>
              <path d="M 46 58 Q 50 63 54 56" fill="none" stroke="#4a4a4a" strokeWidth="3" strokeLinecap="round"/>
              <path d="M 47 68 Q 50 72 53 67" fill="none" stroke="#4a4a4a" strokeWidth="2" strokeLinecap="round"/>

              {/* Front Flames (Inner bright core) */}
              <path d="M 40 82 C 40 65 45 55 50 40 C 55 55 60 65 60 82 Z" fill="#ffeb3b" opacity="0.95"/>
              <path d="M 45 82 C 45 75 48 65 50 55 C 52 65 55 75 55 82 Z" fill="#ffffff" opacity="0.9"/>
            </svg>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
