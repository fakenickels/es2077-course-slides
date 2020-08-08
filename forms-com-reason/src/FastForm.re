module type Config = BsReform.ReForm.Config;

module Checkbox = {
  [@react.component]
  let make = (~value, ~onChange, ~label, ~error=?) => {
    <div className="mb-6">
      <div className="md:flex md:items-center">
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input
            className="mr-2 leading-tight"
            type_="checkbox"
            value
            onChange={event => {
              let value = ReactEvent.Form.target(event)##checked;
              onChange(value);
            }}
          />
          <span className="text-sm"> label->React.string </span>
        </label>
      </div>
      <p className="text-red-500 text-xs italic">
        {error->Belt.Option.getWithDefault("")->React.string}
      </p>
    </div>;
  };
};

module TextField = {
  [@react.component]
  let make = (~value, ~onChange, ~label, ~error=?, ~placeholder, ~type_) => {
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        label->React.string
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value
        onChange={event => {
          let value = ReactEvent.Form.target(event)##value;
          onChange(value);
        }}
        type_
        placeholder
      />
      <p className="text-red-500 text-xs italic">
        {error->Belt.Option.getWithDefault("")->React.string}
      </p>
    </div>;
  };
};

type kind =
  | Password
  | Normal
  | Checkbox;

type meta = {
  placeholder: string,
  label: string,
  kind,
};

module Make = (Config: Config) => {
  module Form = BsReform.ReForm.Make(Config);

  [@react.component]
  let make = (~schema, ~initialState, ~onSubmit) => {
    open Form.Validation;
    let reform: Form.api = Form.use(~schema, ~initialState, ~onSubmit, ());

    let Schema(inner) = schema;

    <div className="w-full max-w-xs">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Form.Provider value=reform>
          {inner
           ->Belt.Array.map(validator => {
               switch (validator) {
               | IntMin({
                   field,
                   meta: Some({label, placeholder, kind: Normal}),
                 }) =>
                 <Form.Field
                   field
                   render={api => {
                     <TextField
                       label
                       placeholder
                       type_="number"
                       error=?{api.error}
                       onChange={value =>
                         api.handleChange(int_of_string(value))
                       }
                       value={string_of_int(api.value)}
                     />
                   }}
                 />
               | IntMax({field}) => React.null
               | FloatMin({field}) => React.null
               | FloatMax({field}) => React.null
               | Email({
                   field,
                   meta: Some({label, placeholder, kind: Normal}),
                 }) =>
                 <Form.Field
                   field
                   render={api => {
                     <TextField
                       label
                       placeholder
                       type_="email"
                       error=?{api.error}
                       onChange={value => api.handleChange(value)}
                       value={api.value}
                     />
                   }}
                 />
               | StringNonEmpty({
                   field,
                   meta: Some({label, placeholder, kind: Normal}),
                 }) =>
                 <Form.Field
                   field
                   render={api => {
                     <TextField
                       label
                       placeholder
                       error=?{api.error}
                       type_="text"
                       onChange={value => api.handleChange(value)}
                       value={api.value}
                     />
                   }}
                 />
               | StringRegExp({field}) => React.null
               | StringMin({field}) => React.null
               | StringMax({field}) => React.null
               | Custom({field, meta: Some({label, kind: Checkbox})}) =>
                 <Form.Field
                   field
                   render={api => {
                     <Checkbox
                       label
                       error=?{api.error}
                       onChange={value =>
                         api.handleChange(Obj.magic(value))
                       }
                       value={string_of_bool(Obj.magic(api.value))}
                     />
                   }}
                 />
               | _ => React.null
               }
             })
           ->React.array}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type_="button"
            onClick={_ => reform.submit()}>
            "Entrar"->React.string
          </button>
        </Form.Provider>
      </div>
    </div>;
  };

  include Form;
};
