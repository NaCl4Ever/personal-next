
import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Script src="https://kit.fontawesome.com/56f8ac9eec.js" crossOrigin='anonymous'/>
  <NextUIProvider>
    <Component {...pageProps} />
  </NextUIProvider>
  </>
  )
}
