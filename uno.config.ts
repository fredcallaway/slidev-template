import { defineConfig, presetAttributify, presetTagify, presetWind3} from 'unocss'
// import extractorMdc from '@unocss/extractor-mdc'


export default defineConfig({
  shortcuts: [
    {
      // custom the default background
      'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
      'bord': 'border-8 border-solid border-black',  // legacy
      'bord-r': 'border-8 border-solid border-red-500',  // legacy
      'debug': 'outline outline-3 outline-red',
      'column': 'flex gap-2 flex-col items-start h-full',
      'row': 'flex gap-2 flex-row items-start w-full',
      'banner': 'h-90 -mt-15 -ml-5 bg-primary flex flex-col justify-center p3 text-4xl font-bold text-white w-60',
      'flex-center': 'flex flex-wrap justify-center items-center',
      'tilt': 'rotate-10',
      'tilt-l': '-rotate-10',
      'full': 'fixed inset-0 h-full w-full',
      'flex-fixed': 'flex-shrink-0 flex-grow-0',
      'cover': 'object-cover!',
      'cite': 'text-sm fw-light text-gray-400',
    },
    [/^circle-(.+)$/, ([, s]) => `rounded-full w-${s} h-${s}`],
    [/^square-(.+)$/, ([, s]) => `w-${s} h-${s}`],
    [/^fill-(.+)$/, ([, c]) => `fixed inset-0 h-full w-full flex flex-col items-center justify-center bg-${c} text-white text-2xl`],
    [/^brd-(.+)$/, ([, c]) => `border-8 border-solid border-${c}`],
    [/^rot(\d+)$/, ([, d]) => `rotate-${d}`],
  ],
  presets: [
    presetWind3(),
    presetAttributify(),
    presetTagify()
  ],
  // extractors: [
  //   extractorMdc()
  // ],
  rules: [
    [/^t(-?\d+)$/, ([, d]) => ({ position: 'absolute', top: `${+d * 10}px` })],
    [/^b(-?\d+)$/, ([, d]) => ({ position: 'absolute', bottom: `${+d * 10}px` })],
    [/^r(-?\d+)$/, ([, d]) => ({ position: 'absolute', right: `${+d * 10}px` })],
    [/^l(-?\d+)$/, ([, d]) => ({ position: 'absolute', left: `${+d * 10}px` })],
    
    // Clip-path rules
    // [/^clip-(\d+)$/, ([, p]) => ({ 'clip-path': `inset(${p}%)` })],
    // [/^clip-(\d+)-(\d+)$/, ([, v, h]) => ({ 'clip-path': `inset(${v}% ${h}%)` })],
    [/^clip-(\d+)-(\d+)-(\d+)-(\d+)$/, ([, t, r, b, l]) => ({ 'clip-path': `inset(${t}% ${r}% ${b}% ${l}%)` })],
    [/^clip-(?=.*[trbl])([trbl]\d+(?:-[trbl]\d+)*)$/, ([, sides]) => {
      const values = { t: '0', r: '0', b: '0', l: '0' };
      sides.split('-').forEach(side => {
        const match = side.match(/([trbl])(\d+)/);
        if (match) values[match[1]] = match[2] + '%';
      });
      return { 'clip-path': `inset(${values.t} ${values.r} ${values.b} ${values.l})` };
    }],
    
  ],
  theme: {
    colors: {
      accent: 'hsl(0, 80, 50)',
      // red: '#ec5759',
      // orange: '#ff9553',
      // yellow: '#ffcb6f',
      // blue: '#028ae7',
      // green: '#69d96c',
      // purple: '#be85ff',
      // pink: '#f187d0',
      dartmouth: "#2C6842",

      baseline: "#5FA3B4",
      bias: "#E1C67C",
      sample: "#83D89E",
      received: "#4AB467",

    }
  }
  // ...
})