import Link from 'next/link';

export default function Home(props) {
  return (
    <main className="container">
      <h2 className="my-4">Index page.</h2>
      <div className="alert alert-primary">
        <p className="h6">This is {props.appname}. by {props.author}</p>
      </div>
      <p className="btn btn-outline-primary">
        <Link href="/other">Go Other page.</Link>
      </p>
    </main>
  )
}

