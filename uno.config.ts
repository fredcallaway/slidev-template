import { defineConfig, presetAttributify, presetTagify, presetWind3} from 'unocss'
// import extractorMdc from '@unocss/extractor-mdc'


export default defineConfig({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
    'bord': 'border-4 border-solid border-black',
    'bord-r': 'border-4 border-solid border-red-500',
    'debug': 'outline outline-3 outline-red',
    'column': 'flex gap-2 flex-col items-start h-full flex-1',
    'row': 'flex gap-2 flex-row items-start w-full'
  },
  presets: [
    presetWind3(),
    presetAttributify(),
    presetTagify()
  ],
  // extractors: [
  //   extractorMdc()
  // ],
  rules: [
    [/^t(\d+)$/, ([, d]) => ({ position: 'absolute', top: `${+d * 10}px` })],
    [/^b(\d+)$/, ([, d]) => ({ position: 'absolute', bottom: `${+d * 10}px` })],
    [/^r(\d+)$/, ([, d]) => ({ position: 'absolute', right: `${+d * 10}px` })],
    [/^l(\d+)$/, ([, d]) => ({ position: 'absolute', left: `${+d * 10}px` })],
  ],
  theme: {
    colors: {
      accent: 'hsl(0, 80, 50)'
    }
  }
  // ...
})