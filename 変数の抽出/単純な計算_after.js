// price関数の中身に変数の抽出を施しなさい

class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {return this._data.quantity;}
  get itemPrice() {return this._data.itemPrice;}

  get price() {
    return this.basePrice - this.quantityDiscount + this.shipping;
  }
  get basePrice() {return this.quantity * this.itemPrice;}
  get quantityDiscount() {return Math.max(0, this.quantity - 500);}
  get shipping() {return Math.min(this.basePrice * 0.1, 100);}
}

// 同じ名前が、価格の計算だけでなくてクラス全体で通用するため、変数でなくメソッドとして抽出