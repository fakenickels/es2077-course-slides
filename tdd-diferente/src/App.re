module type Money = {
  type t;

  let make: int => t;
  let get: t => int;
  let (+): (t, t) => t;
};

module type MoneyConfig = {
  let prefix: string;
};

module Money: (MoneyConfig) => Money = (MoneyConfig) => {
  type t = int;
  let make = a => a;
  let get = a => a;
  let (+) = (a, b) => a + b;
};

module BRLConfig = {
  let prefix = "BRL";
}
module BRL = Money(BRLConfig);

module USD = Money({
  let prefix = "USD";
});


module type Encrypt = {
  type t;
  let make: string => t;
};

module Encrypt = {
  type t = string;
  let make = (a) => a ++ "adfl!!38";
}

let password = Encrypt.make("password");

password ++ "Hello"

let balanceBRL = BRL.make(12);
let balanceUSD = USD.make(12);

let finalBRL = {
  open! BRL;
  (balanceBRL + BRL.make(10))
}

let backToInt = BRL.get(finalBRL);


let getHome = () => `home(<p>"Hello"->React.string</p>);
let getAbout = () => `about(<p>"About"->React.string</p>);
let getContact = () => `contact(<p>"Contact"->React.string</p>);

let render = (state) => {
  switch(state) {
    | `home(el: React.element) => el
    | `about(el) => el
    | `contact(el) => el
  }
};

[@react.component]
let make = () => {
  let (state, setState) = React.useState(() => getHome());

  <div>
    <button onClick={_ => setState(_ => getHome())}>"Home"->React.string</button>
    <button onClick={_ => setState(_ => getAbout())}>"About"->React.string</button>
    <button onClick={_ => setState(_ => getContact())}>"Contact"->React.string</button>
    { render(state) }
  </div>
};
