// 未払金の計算を外部関数に抽出しなさい

function printOwing(invoice) {
  printBanner();
  const outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}
function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

// 戻り値用の変数が複数必要なときは、他のコードを抽出することを選ぶ(関数の戻り値は1つであることが望ましい)
// レコードを作って返すこともできるが、大抵は一時変数に手を加えるという結論に辿り着く　「問い合わせによる一時変数の置き換え」や「変数の分離」を使うと良い