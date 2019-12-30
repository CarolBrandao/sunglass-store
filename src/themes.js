
const breakpoints = ['400px', '500px', '650px' , '800px', '1000px', '1200px']

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp})`
)

const fonts = [
  'GillSans, Helvetica, Arial, sans-serif',
  'GillSans, Helvetica, Arial, sans-serif',
]
fonts.head = fonts[0]
fonts.body = fonts[1]

export const main = {
  breakpoints,
  mq,
  colors: {
    background: '#ffffff',
    disabled: '#b4b3b4',
    danger: '#fa5847',
    title: "#333333",
    text: "#cacaca",
    primaryButton: "#000000", 
    blueBackground: "#6bc5be",
    button: "#b6b6b6",  
    textDarker: "#8e8e8e", 
    success: "#009f66",
    marble: "#82522F",
    nude: "#D4CBB1",
    charcoal: "#534C47",
    red: "#C14539",
    blue: "#0600FE",
    pastel: "#FFC1B3",
    transparent: "#CEC9CD",
  },
  fonts,
  fontSizes: [10, 12, 14, 16, 18, 20, 24, 32, 48],
  radii: [4, 8],
  space: [8, 16, 24, 32, 40, 64, 80, 112, 160],
  shadows: [
    '0 3px 4px 0 rgba(0, 0, 0, 0.1)',
    '0 7px 14px 0 rgba(0, 0, 0, 0.1)',
    '0 7px 40px 0 rgba(0, 0, 0, 0.1)',
  ],
}
