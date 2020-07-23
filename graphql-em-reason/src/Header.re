module HeaderFragment = [%relay.fragment {|
  fragment Header_siteStatistics on Query {
    siteStatistics {
      weeklySales
    }
  }
|}];

[@react.component]
let make = (~queryRef) => {
  let siteStatistics = HeaderFragment.use(queryRef);

  <div>
    <p>{React.string("Bem vindo!")}</p>
    <p>{React.float(siteStatistics.siteStatistics.weeklySales)}</p>
  </div>
}
