type mode = | Light | Awesome(string);

let light = Light;
let makeAwesome = (msg) => Awesome(msg);

[@react.component]
let make = (~mode) => {
  let (state, setState) = React.useState(() => None);

  <div>
    <button onClick={_ => {
      switch(mode) {
        | Light => setState(_ => Some("Light is on"))
        | Awesome(msg) => setState(_ => Some(msg))
      }
    }}>"Click for the awesomeness"->React.string</button>

    {
      switch(state) {
        | Some(msg) => <p>msg->React.string</p>
        | None => React.null
      }
    }
  </div>
}

let default = make;
