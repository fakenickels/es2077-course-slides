[@react.component]
let make = (~name) => {
  <p>{React.string("Helloooo! " ++ name)}</p>
}

let default = make