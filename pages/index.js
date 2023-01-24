import { useState, useEffect } from 'react'

export default function Home(props) {
  const [selected, setSelected] = useState("0")
  const [data, setData] = useState({id:0,data:{name:'-',email:'-',tel:'-'}})
  const doAction = (e)=> setSelected(e.target.value)

  useEffect(()=>{
    fetch(`/api/hello?id=${selected}`)
      .then(res=>res.json())
      .then(res=>setData(res))
  },[selected])

  return (
    <main className="container">
      <h2 className="my-4">Index page.</h2>
      <select className="form-select" onChange={doAction}>
        <option value="0">-</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <hr/>
      <div className="alert alert-primary">
        {data ?
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Tel</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{data.id}</th>
              <td>{data.data.name}</td>
              <td>{data.data.email}</td>
              <td>{data.data.tel}</td>
            </tr>
          </tbody>
        </table>
        :<h6>nodata.</h6>}
      </div>
    </main>
  )
}
