// inNewEnglandのパラメータをstateだけで良いように、移行的手順で変更しなさい

function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}

const newEnglanders = somCustomers.filter(c => inNewEngland);