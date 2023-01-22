import Head from 'next/head'
import { useState, useEffect } from 'react'

const url = "http://localhost:3000/data.json" //☆

export default function Home(props) {g
  return (
    <main className="container">
      <h2 className="my-4">Index page.</h2>
      <div className="alert alert-primary">
        <p className="h6">This is {props.appname}. by {props.author}</p>
      </div>
    </main>
  )
}

