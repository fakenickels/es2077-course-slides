type item = {
  image: string,
  name: string,
  price: float,
};

let item1 = {image: "", name: "Batata", price: 20.0};

let items = [|item1, item1, item1, item1, item1, item1, item1|];

module Styles = {
  open Css;

  let card = style([
    borderWidth(px(2)),
    borderColor(hex("000")),
    borderStyle(solid),
  ])
};

[@react.component]
let make = () => {
  <div>
    {items->Belt.Array.map(item => {
       <MyStyled className={Cn.(Styles.card + [%tw " bg-yellow-400 p-5"])}>
         <h3> item.name->React.string </h3>
         <p> item.price->React.float </p>
       </MyStyled>
     })->React.array}
  </div>;
};
