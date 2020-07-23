module TodosFragment = [%relay.fragment {|
  fragment Todos_todos on Query {
    todos(offset:0, limit: 100) {
      results {
        id
        text
        completed
      }
    }
  }
|}];

[@react.component]
let make = (~todosRef) => {
  let todos = TodosFragment.use(todosRef);

  <div>
    {
      todos.todos.results->Belt.Array.map(todo => {
        <div key={todo.id} className="bg-yellow-300 mt-2 p-2">
          <h3>{todo.text->React.string}</h3>
          <p>{
            todo.completed->Belt.Option.getWithDefault(false) ? "Completed" : "To do"
          }->React.string</p>
        </div>
      })->React.array
    }
  </div>
};