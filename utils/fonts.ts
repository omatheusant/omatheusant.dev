import localFont from "next/font/local";

export const monumentExtended = localFont({
  src: "../public/assets/fonts/MonumentExtended.otf",
});

export const univiaPro = localFont({
  src: [
    {
      path: '../public/assets/fonts/UniviaPro-Light.otf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../public/assets/fonts/UniviaPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ]
});

