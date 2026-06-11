import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import PdfModal from './PdfModal'
import YoutubeModal from './YoutubeModal'
import ProjectModal from './ProjectModal'
import './Projects.css'

const BASE = import.meta.env.BASE_URL

const projects = [
  {
    id: 1,
    title: 'Knight Ascendant 2',
    desc: '온라인 멀티플레이어를 지원하는 장비 수집형 소울라이크 RPG. Photon 기반 실시간 멀티와 Node.js 서버로 랜덤 가챠 시스템(드롭 기록 관리), 소울라이크 재화 시스템, 장비 및 스탯 강화를 구현했습니다.',
    tags: ['Unity', 'C#', 'Soulslike', 'Photon', 'Node.js'],
    period: '2025.04.07 ~ 2025.08.22 (20주)',
    team: '1인',
    engine: 'Unity 6000.0.49f1',
    pdf: `${BASE}portfolio1_knight_ascendant2.pdf`,
    github: 'https://github.com/Nerbe72/ProjectA2',
    youtube: 'https://youtu.be/uc4My2V9fzc',
    images: [
      `${BASE}images/proj1_knight_ascendant2_p0_0.jpeg`,
      `${BASE}images/proj1_knight_ascendant2_p1_0.jpeg`,
      `${BASE}images/proj1_knight_ascendant2_p1_2.png`,
    ],
  },
  {
    id: 2,
    title: 'Dice Knight',
    desc: '주사위 굴림을 중심으로 한 독특한 플레이 방식의 턴제 게임. 매 턴 주사위 결과에 따라 행동이 결정되며, 단순한 규칙 속에서 깊은 전략적 판단을 요구합니다.',
    tags: ['Unity', 'C#', 'Turn-based', 'Dice'],
    period: '2024.06.08 ~ 2024.06.30 (4주)',
    team: '1인',
    engine: 'Unity 2022.03.20f1',
    pdf: `${BASE}portfolio2_dice_knight.pdf`,
    github: 'https://github.com/Nerbe72/Dice-Knight',
    youtube: 'https://youtu.be/uuUOsFvdeG0',
    images: [
      `${BASE}images/proj2_dice_knight_p0_0.jpeg`,
      `${BASE}images/proj2_dice_knight_p1_0.png`,
      `${BASE}images/proj2_dice_knight_p5_0.jpeg`,
    ],
  },
  {
    id: 3,
    title: '비유클리드 통로와 메시 제어 [기술 데모]',
    desc: '비유클리드 공간 개념을 Unity에서 구현한 기술 데모. 메시를 동적으로 제어하여 물리적으로 불가능한 공간 구조—들어가면 나오는 위치가 달라지는 통로—를 표현합니다.',
    tags: ['Unity', 'C#', 'Tech Demo', 'Mesh', 'Shader'],
    period: '2025.01.10 ~ 2025.01.12 (1주)',
    team: '1인',
    engine: 'Unity 6000.0.35f1',
    pdf: `${BASE}portfolio3_non_euclidean.pdf`,
    github: 'https://github.com/Nerbe72/PMGIn6',
    youtube: 'https://youtu.be/dJacFIJ56L8',
    images: [
      `${BASE}images/proj3_non_euclidean_2.jpeg`,
      `${BASE}images/proj3_non_euclidean_3.jpeg`,
    ],
  },
  {
    id: 4,
    title: '절차적 생성',
    desc: '알고리즘을 활용하여 맵, 던전, 지형 등을 절차적으로 자동 생성하는 시스템 구현 연구. BSP 트리를 이용한 던전 생성과 함께 A* 경로탐색 알고리즘도 직접 구현했습니다.',
    tags: ['Unity', 'C#', 'Procedural Gen', 'A*'],
    period: '2025.01.15 ~ 2025.01.25 (2주)',
    team: '1인',
    engine: 'Unity 6000.0.35f1',
    pdf: `${BASE}portfolio4_procedural.pdf`,
    github: 'https://github.com/Nerbe72/PMGIn6',
    youtube: 'https://youtu.be/vfgI2ySxaag',
    images: [
      `${BASE}images/proj4_procedural_0.jpeg`,
      `${BASE}images/proj4_procedural_1.jpeg`,
      `${BASE}images/proj4_procedural_3.jpeg`,
    ],
  },
  {
    id: 5,
    title: 'CrystalMatch',
    desc: '크리스탈을 매칭하는 퍼즐 게임으로, 독창적인 콤보 시스템과 시각 효과를 갖추고 있습니다.',
    tags: ['Unity', 'C#', 'Puzzle'],
    period: '2023.08 ~ 2023.08 (2주)',
    team: '1인',
    engine: 'Unity 2021.03.29f1',
    pdf: `${BASE}portfolio5_crystal_match.pdf`,
    github: 'https://github.com/Nerbe72/3MatchCrystal',
    youtube: 'https://youtu.be/BJo1K0iIpVs',
    images: [
      `${BASE}images/proj5_crystal_match_p0_0.png`,
      `${BASE}images/proj5_crystal_match_p1_0.png`,
    ],
  },
  {
    id: 6,
    title: 'HollowKnight 모작',
    desc: 'HollowKnight를 모작한 메트로배니아 스타일 게임. 원작의 전투 시스템, 이동 메커닉, 레벨 구조를 분석하고 Unity로 직접 재현했습니다.',
    tags: ['Unity', 'C#', 'Metroidvania', 'Imitation'],
    period: '2023.05 ~ 2023.06 (5주)',
    team: '1인',
    engine: 'Unity 2021.03.25f1',
    pdf: `${BASE}portfolio6_hollow_knight.pdf`,
    github: 'https://github.com/Nerbe72/HollowKnight-Imitation',
    youtube: 'https://youtu.be/_ruD2k1Hg1Y',
    images: [
      `${BASE}images/proj6_hollow_knight_p0_0.jpeg`,
      `${BASE}images/proj6_hollow_knight_p1_0.png`,
      `${BASE}images/proj6_hollow_knight_p1_1.png`,
    ],
  },
  {
    id: 7,
    title: 'Toritos (가명)',
    desc: '다양한 모양의 오브젝트를 회전시키며 아래로 내려가는 2D 하드코어 게임. Getting Over It처럼 불편하고 괴랄한 조작감이 핵심이며, 장난스러운 스토리가 포함됩니다. 스팀 출시를 목표로 현재 개발 중입니다.',
    tags: ['Unity', 'C#', '2D', 'Hardcore', 'Steam', 'WIP'],
    period: '현재 진행 중',
    team: '2인 (아트 1, 개발 1)',
    engine: 'Unity',
    pdf: null,
    github: null,
    youtube: null,
    wip: true,
    images: [
      `${BASE}images/toritos_placeholder.png`,
    ],
  },
  {
    id: 8,
    title: '리듬괴도 R : 황제 나폴레옹의 유산 (한글 패치)',
    desc: '닌텐도 3DS 리듬 어드벤처 게임 "리듬괴도 R : 황제 나폴레옹의 유산"의 비공식 유저 한글 패치 제작 프로젝트입니다. 1만 자 이상의 텍스트 및 UI 이미지 번역을 전담했습니다.',
    detailedDesc: '닌텐도 3DS 리듬 어드벤처 게임 "리듬괴도 R : 황제 나폴레옹의 유산"의 비공식 유저 한글 패치 제작 프로젝트입니다. 총 1만 자 이상의 일본어 텍스트 번역과 UI 이미지 번역을 전담했습니다.\n번역기를 보조 도구로 활용하되 고유 명사나 지역명 등은 직접 자료를 검색하며 검증했고, 캐릭터별 대사 뉘앙스의 일관성을 살리기 위해 직접 게임을 플레이하며 한 문장씩 세밀하게 번역을 다듬었습니다. 또한 제작 과정에서 주변 지인들의 피드백과 조언을 적극 수용하여 번역의 자연스러움과 완성도를 높였습니다.',
    tags: ['Translation', 'Localization', 'Fan Patch', 'Nintendo 3DS'],
    period: '2021.01 배포',
    team: '1인 (번역)',
    engine: 'N/A',
    pdf: null,
    blog: 'https://blog.naver.com/nerb0702/222208757481', // 네이버 블로그 링크
    youtube: null,
    topAlignThumb: true,
    containModalImg: true,
    images: [
      `${BASE}images/proj8_rhythm_thief.png`,
      `${BASE}images/proj8_rhythm_thief_2.png`,
      `${BASE}images/proj8_rhythm_thief_3.png`,
      `${BASE}images/proj8_rhythm_thief_4.png`,
    ],
  },
]

export default function Projects() {
  const [ref, inView] = useInView(0.05)
  const [selected, setSelected] = useState(null)    // 상세 모달용
  const [pdfProject, setPdfProject] = useState(null) // PDF 모달용
  const [ytProject,  setYtProject]  = useState(null) // YouTube 모달용

  const openProject = (p) => setSelected(p)
  const closeProject = () => setSelected(null)

  const openPdf = () => {
    const p = selected
    closeProject()
    setTimeout(() => setPdfProject(p), 120)
  }
  const openYt = () => {
    const p = selected
    closeProject()
    setTimeout(() => setYtProject(p), 120)
  }

  return (
    <section id="projects" className="projects">
      <div className="container" ref={ref}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          개발 프로젝트
        </motion.h2>

        <div className="projects-grid">
          {projects.filter(p => !p.tags.includes('Translation')).map((p, i) => (
            <motion.div
              key={p.id}
              className={`project-card${p.wip ? ' wip' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 + 0.2, duration: 0.5 }}
              onClick={() => openProject(p)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && openProject(p)}
              aria-label={`${p.title} 자세히 보기`}
            >
              {p.images && p.images[0] && (
                <div className={`card-thumb${p.topAlignThumb ? ' top-align' : ''}`}>
                  <img src={p.images[0]} alt={p.title} />
                  <div className="card-thumb-overlay">
                    <span className="card-open-hint">클릭하여 자세히 보기</span>
                  </div>
                </div>
              )}
              <div className="card-body">
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="card-links" onClick={e => e.stopPropagation()}>
                  {p.wip && <span className="wip-badge">개발 중</span>}
                  {p.youtube && (
                    <a href={p.youtube} target="_blank" rel="noopener noreferrer" className="card-link" aria-label="YouTube">
                      <YoutubeIconSmall />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="card-link" aria-label="GitHub">
                      <GitHubIconSmall />
                    </a>
                  )}
                  {p.blog && (
                    <a href={p.blog} target="_blank" rel="noopener noreferrer" className="card-link" aria-label="Naver Blog">
                      <BlogIconSmall />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="section-title"
          style={{ marginTop: '5rem' }}
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          번역 프로젝트
        </motion.h2>

        <div className="projects-grid">
          {projects.filter(p => p.tags.includes('Translation')).map((p, i) => (
            <motion.div
              key={p.id}
              className={`project-card${p.wip ? ' wip' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07 + 0.2, duration: 0.5 }}
              onClick={() => openProject(p)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && openProject(p)}
              aria-label={`${p.title} 자세히 보기`}
            >
              {p.images && p.images[0] && (
                <div className={`card-thumb${p.topAlignThumb ? ' top-align' : ''}`}>
                  <img src={p.images[0]} alt={p.title} />
                  <div className="card-thumb-overlay">
                    <span className="card-open-hint">클릭하여 자세히 보기</span>
                  </div>
                </div>
              )}
              <div className="card-body">
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="card-links" onClick={e => e.stopPropagation()}>
                  {p.wip && <span className="wip-badge">개발 중</span>}
                  {p.youtube && (
                    <a href={p.youtube} target="_blank" rel="noopener noreferrer" className="card-link" aria-label="YouTube">
                      <YoutubeIconSmall />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="card-link" aria-label="GitHub">
                      <GitHubIconSmall />
                    </a>
                  )}
                  {p.blog && (
                    <a href={p.blog} target="_blank" rel="noopener noreferrer" className="card-link" aria-label="Naver Blog">
                      <BlogIconSmall />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 프로젝트 상세 모달 */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={closeProject}
            onPdf={openPdf}
            onYoutube={openYt}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {pdfProject && (
          <PdfModal pdf={pdfProject.pdf} title={pdfProject.title} onClose={() => setPdfProject(null)} />
        )}
        {ytProject && ytProject.youtube && (
          <YoutubeModal url={ytProject.youtube} title={ytProject.title} onClose={() => setYtProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

const GitHubIconSmall = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const YoutubeIconSmall = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const BlogIconSmall = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"/>
  </svg>
)

