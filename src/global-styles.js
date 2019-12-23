import React from 'react'
import { useTheme } from 'emotion-theming'

import styledSystemCss from '@styled-system/css'
import { Global, css } from '@emotion/core'

function CssFontFaces() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'GillSans';
          src: url('/fonts/GillSansMTPro-Book.woff') format('woff'),
            url('/fonts/GillSansMTPro-Book.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: 'GillSans';
          src: url('/fonts/GillSansMTPro-Book.woff') format('woff'),
            url('/fonts/GillSansMTPro-Book.woff2') format('woff2');
          font-weight: normal;
          font-style: italic;
          font-display: swap;
        }

        @font-face {
          font-family: 'GillSans';
          src: url('/fonts/GillSansMTPro-ExtraBold.woff') format('woff'),
            url('/fonts/GillSansMTPro-ExtraBold.woff2') format('woff2');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }
      `}
    />
  )
}

function CssReset() {
  return (
    <Global
      styles={css`
        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }

        a {
          text-decoration: inherit;
          color: inherit;
          cursor: pointer;
        }

        hr {
          margin: 0;
        }
      `}
    />
  )
}

function CssBase() {
  const theme = useTheme()
  return (
    <Global
      styles={css`
        body {
          ${styledSystemCss({
            backgroundColor: 'background',
            color: 'text',
            fontFamily: 'body',
            fontSize: [2, 3],
            overflowX: 'hidden',
          })({ theme })}
        }

        p {
          line-height: 1.25;
        }
      `}
    />
  )
}

export function GlobalStyles() {
  return (
    <React.Fragment>
      <CssFontFaces />
      <CssReset />
      <CssBase />
    </React.Fragment>
  )
}
