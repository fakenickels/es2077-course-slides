let toJsonResult = promise => {
  promise
  ->Js.Promise.then_(Fetch.Response.json, _)
  ->Promise.Js.fromBsPromise
  ->Promise.Js.toResult;
};

let combineRequestOrDeccoError = (promise, decoder) => {
  promise
  ->Promise.mapError(error => `ResponseError(error))
  ->Promise.flatMapOk(json =>
      json
      ->decoder
      ->(
          fun
          | Ok(ok) => Ok(ok)
          | Error(error) => Error(`DeccoError(error))
        )
      ->Promise.resolved
    );
};

module Person = {
  [@decco]
  type payload = {
    name: string,
    age: int,
    acceptedTerms: bool,
  };

  [@decco]
  type response = {
    id: string,
    name: string,
    age: int,
  };

  let request = (~payload) => {
    open Fetch;
    let body = payload |> payload_encode |> Js.Json.stringify |> BodyInit.make;
    let headers = HeadersInit.make({"Content-Type": "application/json"});

    fetchWithInit(
      "http://localhost:3001/",
      RequestInit.make(~method_=Post, ~body, ~headers, ()),
    )
    ->toJsonResult
    ->combineRequestOrDeccoError(response_decode);
  };
};
