// addReservation関数に、優先度が高い予約かどうかを判別するパラメータ(is priority)を、移行的手順で追加しなさい

class Book {

  // addReservation関数を呼び出しているコードに対して、addReservation関数に「関数のインライン化」を施す
  // その後、addReservation関数は削除する
  // その後、zz_addReservation関数に名前の変更を施し、addReservation関数にする
  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }
  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}