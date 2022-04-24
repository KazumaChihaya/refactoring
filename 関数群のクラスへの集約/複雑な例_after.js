// 関数群のクラスへの集約を施しなさい

reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {return this._customer;}
  get quantity() {return this._quantity;}
  get month() {return this._month;}
  get year() {return this._year;}

  get baseCharge() {
    return baseRate(this._month, this._year) * this_.quantity;
  }
  get taxAbleCharge() {
    return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
  }
}
function client1() {
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  const baseCharge = aReading.baseCharge;
}
function client2() {
  const rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  const taxableCharge = aReading.taxAbleCharge;
}
function client3() {
  const rawReading = aquireReading();
  const aReading = new Reading(rawReading);
  const basicChargeAmount = aReading.baseCharge;
}