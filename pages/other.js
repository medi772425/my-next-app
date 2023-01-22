import Link from 'next/link';

export default function Other(props) {
  return (
    <main className="container">
      <h2 className="my-4">Other page.</h2>
      <div className="alert alert-info">
        <p className="h6">This is Other page content.</p>
      </div>
      <p className="btn btn-outline-primary">
        <Link href="/">Go Index page.</Link>
      </p>
    </main>
  )
}
