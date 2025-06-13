import { defineConfig, presetAttributify, presetTagify} from 'unocss'

export default defineConfig({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
    'border': 'border-4 border-solid border-black',
  },
  presets: [
    presetAttributify(),
    presetTagify()
  ],
  rules: [
    [/^t(\d+)$/, ([, d]) => ({ position: 'absolute', top: `${+d * 10}px` })],
    [/^b(\d+)$/, ([, d]) => ({ position: 'absolute', bottom: `${+d * 10}px` })],
    [/^r(\d+)$/, ([, d]) => ({ position: 'absolute', right: `${+d * 10}px` })],
    [/^l(\d+)$/, ([, d]) => ({ position: 'absolute', left: `${+d * 10}px` })],
  ],
  theme: {
    colors: {
      accent: 'rgb(26, 195, 159)'
    }
  }
  // ...
})