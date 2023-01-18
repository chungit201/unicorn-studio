import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {SSRProvider} from "react-bootstrap";
import HeaderPage from "@/common/compoments/HeaderPage";
import 'bootstrap/dist/css/bootstrap.css';
import '../common/assets/css/slider.scss';
import '../common/assets/css/style.css';
import Footer from "@/common/compoments/Footer";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import ProgressBarComponent from '@/common/compoments/TopBarProgress';
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
  const [progress, setProgress] = useState(false)
  const [prevLoc, setPrevLoc] = useState("");
  const location = useRouter();

  useEffect(() => {
    setPrevLoc(location.pathname)
    setProgress(true)
    if (location.pathname === prevLoc) {
      setPrevLoc('')
    }
  }, [location])

  useEffect(() => {
    setProgress(false)
  }, [prevLoc])

  const MainLayout = () => (
    <Component {...pageProps} />
  )

  return (
    <SSRProvider>
      {progress && <ProgressBarComponent/>}
      <Head>
        <title>Unicron Studio</title>
      </Head>
      <div className={"bg__page"}>
        <HeaderPage/>
        <MainLayout/>
        <Footer/>
      </div>
    </SSRProvider>
  )
}