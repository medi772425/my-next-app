export default function Header(props) {
  return (
    <div>
      <h1 className="h4 bg-secondary text-white p-2">
        {props.appname}
      </h1>
    </div>
  )
}
