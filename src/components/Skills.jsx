import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import './Skills.css'

const skills = [
  {
    category: '언어',
    items: ['C#', 'C++', 'ShaderLab / HLSL'],
  },
  {
    category: '엔진 & 프레임워크',
    items: ['Unity 3D / 2D', 'xNode', 'UniTask', 'PrimeTween', 'Newtonsoft Json'],
  },
  {
    category: '클라이언트 아키텍처',
    items: [
      'Addressable / AssetBundle',
      'ScriptableObject',
      'FSM / Behaviour Tree',
      'Custom Editor',
      'UGUI / Unity Action',
    ],
  },
  {
    category: '네트워크 & 백엔드',
    items: ['Photon (PUN2)', 'Node.js', 'Firebase Realtime DB'],
  },
  {
    category: '자료구조 & 알고리즘',
    items: ['Linked List / Queue / Stack / Tree', 'BFS / DFS', 'A* 경로탐색', '절차적 생성 (BSP)', '비유클리드 공간 구현'],
  },
  {
    category: '툴 & 협업',
    items: ['Git / GitHub', 'Unity Version Control', 'AI 도구 활용 (코드 최적화)', '빌드 자동화'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="skills" className="skills">
      <div className="container" ref={ref}>
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.p>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          기술 스택
        </motion.h2>

        <div className="skills-grid">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              className="skill-group"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.08 + 0.2, duration: 0.5 }}
            >
              <h3 className="skill-category">{group.category}</h3>
              <ul className="skill-list">
                {group.items.map(item => (
                  <li key={item} className="skill-item">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
