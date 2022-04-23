// example関数の中身に変数の抽出を施しなさい

function example(order) {
  //本体価格(base price) - 数量割引(quantity discount) + 送料(shipping)
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  return basePrice - quantityDiscount + shipping;
}