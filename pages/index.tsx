import Head from 'next/head'
import { Content } from '../components/Content';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrap}>

        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
        </Head>

        <Navbar />
        <Content/>
        <Footer />
      </div>
    </div>
  )
}
