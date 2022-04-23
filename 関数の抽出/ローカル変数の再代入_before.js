// 未払金の計算を外部関数に抽出しなさい

function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  // 未払金の計算 (calculate outstanding)
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

