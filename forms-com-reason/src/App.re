module StateLenses = [%lenses
  type state = {
    name: string,
    surname: string,
    age: int,
    acceptedTerms: bool,
  }
];

module SignUpFastForm = FastForm.Make(StateLenses);

[@react.component]
let make = () => {
  let (AsyncHook.{state: personCreateState}, personCreate) =
    AsyncHook.use((~cb, ~name, ~age, ~acceptedTerms) =>
      cb(() => {Api.Person.request(~payload={name, age, acceptedTerms})})
    );

  let schema =
    SignUpFastForm.Validation.(
      Schema(
        nonEmpty(
          ~error="Nome tem que estar preenchido",
          ~meta=
            FastForm.{
              placeholder: "Maria",
              label: "Primeiro nome",
              kind: Normal,
            },
          Name,
        )
        + nonEmpty(
          ~meta=
            FastForm.{
              placeholder: "da Silva",
              label: "Sobrenome",
              kind: Normal,
            },
          Surname,
        )
        + int(
            ~min=16,
            ~meta=FastForm.{placeholder: "18", label: "Idade", kind: Normal},
            Age,
          )
        + custom(
            ~meta=
              FastForm.{
                placeholder: "",
                label: "Aceita os termos de uso?",
                kind: Checkbox,
              },
            values => {
              values.acceptedTerms
                ? Valid : Error({j|Aceite os termos de uso|j})
            },
            AcceptedTerms,
          ),
      )
    );

  let onSubmit = (form: SignUpFastForm.onSubmitAPI) => {
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
  };

  <div>
    <SignUpFastForm
      initialState=StateLenses.{name: "", age: 0, surname: "", acceptedTerms: false}
      schema
      onSubmit
    />
    <div>
      {switch (personCreateState) {
       | Idle => React.null
       | Loading => React.string("Loading")
       | Error(_) => React.string("Algo deu errado")
       | Data(data) => React.string(data.id)
       }}
    </div>
  </div>;
};
