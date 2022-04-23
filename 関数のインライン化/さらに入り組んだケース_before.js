// gatherCustomerDataをインライン化しなさい

function reportLines(aCustomer) {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
}
function gatherCustomerData(out, aCustomer) {
  out.push(["name", aCustomer.name]);
  out.push(["location", aCustomer.location]);
}