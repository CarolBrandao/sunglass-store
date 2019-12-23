const breakpoints = ['500px', '800px', '1000px']
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]

const fonts = [
  'Gilroy, Helvetica, Arial, sans-serif',
  'Gilroy, Helvetica, Arial, sans-serif',
]
fonts.head = fonts[0]
fonts.body = fonts[1]

export const main = {
  breakpoints,
  colors: {
    background: '#17061d',
    backgroundInverted: '#f9f9f9',
    disabled: '#c9c9c9',
    danger: '#fa5847',
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
