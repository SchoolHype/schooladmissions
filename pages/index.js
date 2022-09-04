import Head from 'next/head'
import styles from '../styles/HomePage.module.css'
import RegisterButton from '../Components/RegisterButton'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>

      <Head>
        <title>School Admissions</title>
        <meta name="description" content="Find school for your children" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Welcome to school Admission</h1>
          <h2 className={styles.mainText}>REGISTER HERE</h2>
          <div className={styles.notifyInput}>
            <RegisterButton onClick={() => { router.push("/registerForm") }}>Register</RegisterButton>
          </div>
        </div>

      </main>

    </div>
  )
}
