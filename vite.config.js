import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 배포 시 base를 repo 이름으로 설정
// 예: https://Nerbe72.github.io/Portfolio/ 로 배포할 경우 '/Portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
})
