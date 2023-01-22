import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Sample App</title>
      </Head>
      <main className="container">
        <h2>Index page.</h2>
        <p>これは、サンプルで作成したページです。</p>
      </main>
    </div>
  )
}

