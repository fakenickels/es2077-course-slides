[@react.component]
let make = () => {
  <div className="">
    <div className="">
      <ReactExperimental.Suspense
        fallback={<div> {React.string("Loading...")} </div>}>
        <Main />
      </ReactExperimental.Suspense>
    </div>
  </div>;
};
