import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/250619/', // 這裡要填你的 repo 名稱，前後都要有斜線
})
