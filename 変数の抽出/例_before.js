// example関数の中身に変数の抽出を施しなさい

function example(order) {
  //本体価格(base price) - 数量割引(quantity discount) + 送料(shipping)
  return order.quantity * order.itemPrice - Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 + Math.min(order.quantity * order.itemPrice * 0.1, 100);
}