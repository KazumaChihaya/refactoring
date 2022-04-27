// フェーズの分離を行いなさい
// orderDataをパース(order parse)してorderRecordを作成し、priceを計算するようにしなさい


const orderData = orderString.split(/\s+/);
const productPrice = priceList[orderData[0].split("-")[1]];
const orderPrice = parseInt(orderData[1]) * productPrice;