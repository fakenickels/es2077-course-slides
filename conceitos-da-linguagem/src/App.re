let a = 12;
let b = "12";
let c = 'c';
let name = Some("hey");
let nameNo = None;
let ab = 12.;

module MyScope = {
  let a = 12;
};

type state = {
  name: string,
  age: int,
};

let person: state = {name: "adf", age: 12};

let myList = [1, 2, 4, 5];
let myArray = [|12, 2, 4, 5|];

type person =
  | Admin
  | User;

type personPoly = [ | `admin | `user];
type personPolyPoly = [ | `super];

let gabriel = Admin;
let maria = `admin;

let myNull = Js.Null_undefined.null;
let myUndefined = Js.Null_undefined.undefined;

module type MyListConfig = {
  type t;
};

module MyListMake = (Config: MyListConfig) => {
  [@react.component]
  let make = (~data: array(Config.t), ~render: Config.t => React.element) => {
    <ul>
      {
         data
         ->Belt.Array.map(element => {<li> {render(element)} </li>})
         ->React.array
       }
    </ul>;
  };
};

module MyListStringConfig = {
  type t = string;
};

module MyListString = MyListMake(MyListStringConfig);

module MyListIntConfig = {
  type t = int;
};

module MyListInt = MyListMake(MyListIntConfig);

[@react.component]
let make = () => {
  <>
    <MyListString
      data={([|"12", "12", "3990"|])}
      render={element => {<div> element->React.string </div>}}
    />

    <MyListInt
      data={([|12, 12, 3990|])}
      render={element => {<div> element->string_of_int->React.string </div>}}
    />
  </>
};
