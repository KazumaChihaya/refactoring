// 関数群のクラスへの集約を施しなさい

reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(aReading);
  result.taxableCharge = taxAbleCharge(aReading);
  return result;
}
function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
function taxAbleCharge(aReading) {
  return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
}

function client1() {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const baseCharge = aReading.baseCharge;
}
function client2() {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const taxableCharge = aReading.taxAbleCharge;
}
function client3() {
  const rawReading = aquireReading();
  const aReading = enrichReading(rawReading);
  const basicChargeAmount = aReading.baseCharge;
}