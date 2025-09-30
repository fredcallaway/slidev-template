import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // General theme variables

      primaryColor: '#fff',
      primaryTextColor: '#000',
      primaryBorderColor: '#000',
      
      lineColor: '#000',
      secondaryColor: '#000',
      tertiaryColor: '#000',
    }
  }
})