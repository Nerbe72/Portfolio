import { useState, useRef, useEffect } from 'react';
import './ThemeSwitcher.css';

const THEMES = {
  original: {
    label: 'Dark',
    file: null,
    color: '#0a0a0a',
  },
  dohna: {
    label: 'Neon',
    file: import.meta.env.BASE_URL + 'themes/dohna.css',
    color: '#FF007F',
  },
  natsu: {
    label: 'Sky',
    file: import.meta.env.BASE_URL + 'themes/natsu.css',
    color: '#eaf4fc',
  }
};

export default function ThemeSwitcher() {
  const [selectedTheme, setSelectedTheme] = useState('original');
  const [activeTheme, setActiveTheme] = useState('original');
  const [animating, setAnimating] = useState(false);
  const [phase, setPhase] = useState('idle'); // 'idle', 'expanding', 'fading'
  const [circleData, setCircleData] = useState({ x: 0, y: 0, color: '#000', size: 0 });

  const btnRef = useRef(null);

  const applyTheme = (themeKey, onLoad) => {
    const theme = THEMES[themeKey];
    const existingLink = document.getElementById('dynamic-theme');

    if (theme.file) {
      if (!existingLink) {
        const link = document.createElement('link');
        link.id = 'dynamic-theme';
        link.rel = 'stylesheet';
        link.href = theme.file;
        link.onload = () => {
          if (onLoad) onLoad();
        };
        document.head.appendChild(link);
      } else {
        existingLink.onload = () => {
          if (onLoad) onLoad();
        };
        existingLink.href = theme.file;
      }
    } else {
      if (existingLink) {
        existingLink.remove();
      }
      // 원본 복구 시에는 다운로드가 없으므로 약간 대기 후 바로 실행
      setTimeout(() => {
        if (onLoad) onLoad();
      }, 50);
    }
    setActiveTheme(themeKey);
  };

  const handleApply = () => {
    if (animating || selectedTheme === activeTheme) return;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const maxSize = Math.max(windowWidth, windowHeight) * 2.5;

    const rect = btnRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    setCircleData({
      x,
      y,
      color: THEMES[selectedTheme].color,
      size: maxSize
    });
    setAnimating(true);
    setPhase('idle');

    // 프레임 분리를 위해 약간의 지연 후 expanding 클래스 추가
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setPhase('expanding');
      });
    });

    // 1단계: 원이 다 퍼질 때까지 대기 (600ms)
    setTimeout(() => {
      // 테마 교체 및 로드 완료 이벤트 대기
      applyTheme(selectedTheme, () => {
        // 2단계: CSS 로딩 완료 후 페이드아웃
        // 브라우저 렌더링 프레임 확보를 위해 약간의 지연 추가
        requestAnimationFrame(() => {
          setTimeout(() => {
            setPhase('fading');
          }, 50);
        });
      });
    }, 600);
  };

  const handleTransitionEnd = (e) => {
    if (phase === 'fading' && e.propertyName === 'opacity') {
      setAnimating(false);
      setPhase('idle');
      setCircleData(prev => ({ ...prev, size: 0 }));
    }
  };

  return (
    <div className="theme-switcher-wrapper">
      <div className="theme-switcher">
        <select 
          className="theme-select"
          value={selectedTheme} 
          onChange={(e) => setSelectedTheme(e.target.value)}
        >
          {Object.entries(THEMES).map(([key, data]) => (
            <option key={key} value={key}>{data.label}</option>
          ))}
        </select>
        <button 
          ref={btnRef}
          className="theme-btn" 
          onClick={handleApply}
          disabled={animating}
        >
          적용
        </button>
      </div>

      <div 
        className={`theme-transition-circle ${phase}`}
        style={{
          left: circleData.x,
          top: circleData.y,
          backgroundColor: circleData.color,
          width: circleData.size,
          height: circleData.size,
          marginLeft: -circleData.size / 2,
          marginTop: -circleData.size / 2,
          display: circleData.size === 0 ? 'none' : 'block'
        }}
        onTransitionEnd={handleTransitionEnd}
      />
    </div>
  );
}
