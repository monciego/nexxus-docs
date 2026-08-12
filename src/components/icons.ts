// Icon SVGs for use with Button component
export const icons = {
  send: `<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.568 10.304c0 .1-.02.195-.047.285l-4.403-4.735 4.45-3.46zm-13.074.962 4.462-4.754 1.69 1.278 1.618-1.286 4.535 4.762c-.071.016-12.234.016-12.305 0m-.769-.962v-7.91l4.45 3.46-4.403 4.735a1 1 0 0 1-.047-.285m13.349-8.9L8.647 6.35 2.219 1.404zm-.495-.988H2.714A1.98 1.98 0 0 0 .736 2.393v7.91c0 1.093.886 1.978 1.978 1.978h11.865a1.98 1.98 0 0 0 1.978-1.977v-7.91A1.98 1.98 0 0 0 14.579.415" fill="currentColor"/>
  </svg>`,

  sendOutline: `<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.03 10.228c0 .1-.018.196-.046.286L10.58 5.78l4.45-3.46zm-13.073.963L6.42 6.436l1.69 1.278L9.727 6.43l4.535 4.762c-.071.016-12.234.016-12.305 0m-.769-.963v-7.91l4.45 3.46-4.403 4.736a1 1 0 0 1-.047-.286M14.537 1.33 8.108 6.273 1.682 1.33zm-.495-.988H2.177A1.98 1.98 0 0 0 .199 2.318v7.91c0 1.092.886 1.978 1.978 1.978h11.865a1.98 1.98 0 0 0 1.978-1.978v-7.91A1.98 1.98 0 0 0 14.042.341" fill="currentColor"/>
  </svg>`,

  arrowRight: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 8L11 8M11 8L8 5M11 8L8 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  download: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3V13M3 8L8 13L13 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,

  external: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3H13V11M13 11L9 7M13 11L9 15M3 13V5A2 2 0 0 1 5 3H13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
} as const;

export type IconName = keyof typeof icons;
