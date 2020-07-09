open BsReform;

module StateLenses = [%lenses
  type state = {
    name: string,
    age: int,
    acceptedTerms: bool,
  }
];

module SignUpForm = ReForm.Make(StateLenses);

module AsyncFetch = {
  type state('a) =
    | Idle
    | Loading
    | Data('a)
    | Error(Api.requestError);
  type action('a) =
    | Fetch(
        Promise.rejectable(
          Belt_Result.t('a, Api.requestError),
          Promise.never,
        ),
      )
    | SetData('a)
    | SetError(Api.requestError);

  let use = fn => {
    let (state, send) =
      ReactUpdate.useReducer(Idle, (action, _state) => {
        switch (action) {
        | Fetch(promise) =>
          UpdateWithSideEffects(
            Loading,
            self => {
              let () =
                promise->Promise.get(result => {
                  switch (result) {
                  | Ok(data) => self.send(SetData(data))
                  | Error(msg) => self.send(SetError(msg))
                  }
                });

              None;
            },
          )
        | SetData(data) => Update(Data(data))
        | SetError(data) => Update(Error(data))
        }
      });

    let fetchWithArgs =
      fn(~cb=request => {
        let promise = request();
        // dispatch promise instance for declarative usage
        send(Fetch(promise));
        // send same promise instance for local instance handling
        promise;
      });

    (state, fetchWithArgs);
  };
};

[@react.component]
let make = () => {
  let (personCreateState, personCreate) =
    AsyncFetch.use((~cb, ~name, ~age, ~acceptedTerms) =>
      cb(() => {Api.Person.request(~payload={name, age, acceptedTerms})})
    );

  let form =
    SignUpForm.use(
      ~initialState={name: "", age: 0, acceptedTerms: false},
      ~schema=
        SignUpForm.Validation.Schema([|
          StringNonEmpty(Name),
          IntMin(Age, 16),
          Custom(
            AcceptedTerms,
            values => {
              values.acceptedTerms
                ? Valid
                : Error({j|Idade não aceita para este tipo de rolê|j})
            },
          ),
        |]),
      ~onSubmit=
        form => {
          let values = form.state.values;

          personCreate(
            ~name=values.name,
            ~age=values.age,
            ~acceptedTerms=values.acceptedTerms,
          )
          ->Promise.get(response => {
              switch (response) {
              | Ok(response) => Js.log(response)
              | Error(response) => Js.log(response)
              }
            });

          Js.log(form.state.values);
          None;
        },
      (),
    );

  <SignUpForm.Provider value=form>
    <div>
      <SignUpForm.Field
        field=Name
        render={({handleChange, value, error}) => {
          <p>
            "Nome"->React.string
            <p>
              <input
                type_="text"
                value
                onChange={event => {
                  let value = ReactEvent.Form.target(event)##value;
                  handleChange(value);
                }}
              />
            </p>
            <p> {error->Belt.Option.getWithDefault("")->React.string} </p>
          </p>
        }}
      />
      <SignUpForm.Field
        field=Age
        render={({handleChange, value, error}) => {
          <p>
            "Nome"->React.string
            <p>
              <input
                type_="number"
                value={string_of_int(value)}
                onChange={event => {
                  let value = ReactEvent.Form.target(event)##value;
                  handleChange(int_of_string(value));
                }}
              />
            </p>
            <p> {error->Belt.Option.getWithDefault("")->React.string} </p>
          </p>
        }}
      />
      <SignUpForm.Field
        field=AcceptedTerms
        render={({handleChange, value, error}) => {
          <p>
            "Nome"->React.string
            <p>
              <input
                type_="checkbox"
                value={string_of_bool(value)}
                onChange={event => {
                  let value = ReactEvent.Form.target(event)##checked;
                  handleChange(value);
                }}
              />
            </p>
            <p> {error->Belt.Option.getWithDefault("")->React.string} </p>
          </p>
        }}
      />
      <button onClick={_e => {form.submit()}}> "Enviar"->React.string </button>
      <div>
        {switch (personCreateState) {
         | Idle => React.null
         | Loading => React.string("Loading")
         | Error(_) => React.string("Algo deu errado")
         | Data(data) => React.string(data.id)
         }}
      </div>
    </div>
  </SignUpForm.Provider>;
};
