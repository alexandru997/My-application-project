import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'


// export default defineConfig({
//   plugins: [tsconfigPaths()],
// })
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
})

