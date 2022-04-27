// フェーズの分離を行いなさい
// orderStringをパース(order parse)してorderRecordを作成し、priceを計算するようにしなさい


const orderRecord = parseOrder(orderString);
const orderPrice = price(orderRecord, priceList);

function parseOrder(aString) {
  const values = aString.split(/\s+/);
  return ({
    productId: values[0].split("-")[1],
    quantity: parseInt(values[1]),
  });
}
function price(order, priceList) {
  return order.quantity * priceList[order.productId];
}