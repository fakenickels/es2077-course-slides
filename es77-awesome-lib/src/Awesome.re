let getNiceNumber = () => {
  let (p, resolve) = Promise.pending()

  let _ = Js.Global.setTimeout(() => {
    resolve(Ok(12))
  }, 1200)
  
  p
};

let mapToJs = (res) => {
  switch(res) {
    | Ok(res) => Some({"ok": res})
    | Error(_) => None
  }
}

let getNiceNumberJs = () => {
  getNiceNumber()
    ->Promise.map(mapToJs)
}
