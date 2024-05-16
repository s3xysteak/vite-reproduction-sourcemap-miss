import { defineConfig } from 'vite';

export default defineConfig(()=>{
  return {
    plugins: [
      {
        name: 'test',
        config(){
          return {
            build: {
              rollupOptions: {
                external: ['cesium']
              }
            }
          }
        },
        transformIndexHtml: () => [{
          tag: 'script',
          attrs: { src: '/node_modules/cesium/Build/CesiumUnminified/Cesium.js' }
        }]
      }
    ]
  }
})