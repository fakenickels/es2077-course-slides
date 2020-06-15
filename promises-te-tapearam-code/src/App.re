module Await = {
  let let_ = (promise, map) => Js.Promise.then_(map, promise);
};

module ReactTop = {
  let let_ = (react, map) => react(map);
};

module GiveMeValue = {
  [@react.component]
  let make = (~children) => {
    children("Helo from give me")
  }
};

let usePromise = () => {
  let (message, setMessage) = React.useState(() => "Aguarde...");

  React.useEffect0(() => {
    let data = Js.Promise.resolve("Hello");

    let _ = {
      let%Await res = data;

      setMessage(_ => res);
      Js.Promise.resolve()
    };

    None
  });

  message;
};

[@react.component]
let make = () => {
  let message = usePromise();
  let%ReactTop value = cb =>
    <GiveMeValue> cb </GiveMeValue>;

  <p> ( message ++ value )->React.string </p>;
};
