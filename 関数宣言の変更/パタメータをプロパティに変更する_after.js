// inNewEnglandのパラメータをstateだけで良いように、移行的手順で変更しなさい

// この時点で関数のインライン化が住んでいるので、古い関数は呼び出されていないので削除して良い
// その後、新しい関数名を正しく変更
function inNewEngland(aCustomer) {
  return zzNewinNewEngland(aCustomer.address.state);
}
function zzNewinNewEngland(stateCode) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

const newEnglanders = somCustomers.filter(c => zzNewinNewEngland(c.address.state));