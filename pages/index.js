import Head from 'next/head'

const url = "http://localhost:3000/data.json" // ☆

export async function getStaticProps(context) {
  const result = await fetch(url)
  const data = await result.json()
  return {
    props:{data:data}
  }
}

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>My Sample App</title>
      </Head>
      <main className="container">
        <h2>Index page.</h2>
        <div className="alert alert-primary my-3">
          <ol>
          {props.data.map(value=>
            <li className="my-2 h6" key={value.name}>
              {value.message} ({value.name} [{value.email}])
            </li>
          )}
          </ol>
        </div>
      </main>
    </div>
  )
}
