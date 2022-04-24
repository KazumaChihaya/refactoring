// readingsOutsideRange関数にパラメータオブジェクトを導入しなさい

class NumberRange {
  constructor(min, max) {
    this._data = {min: min, max: max};
  }
  get min() {return this._data.min;}
  get max() {return this._data.max;}

  //構造体に振る舞いを移すことができるという素晴らしい例
  contains(arg) {return (arg >= this.min && arg <= this.max);}
}
const station = { 
  name: "ZB1",
  readings: [
    {temp: 47, time: "2016-11-10 09:10"},
    {temp: 53, time: "2016-11-10 09:20"},
    {temp: 58, time: "2016-11-10 09:30"},
    {temp: 53, time: "2016-11-10 09:40"},
    {temp: 51, time: "2016-11-10 09:50"},
  ]
};

function readingsOutsideRange(station, range) {
  //上記の素晴らしい例を使用して条件をかく
  return station.readings.filter(r => range.contains(r.temp));
}

const alert = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeiling);

// パラメータの参照を構造体の参照に一つ変えるごとにテストする
// NumberRangeクラスはさまざまなところで使用可能なので、最大値・最小値ペアを使用している他の箇所がないか目を光らせて、範囲クラスに置き換えることが可能
// もし新しい振る舞いが必要な部分だったら、新しいメソッドを追加して良い
