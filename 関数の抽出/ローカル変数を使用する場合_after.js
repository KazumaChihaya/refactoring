// 明細の印字を外部関数に抽出しなさい
// 締め日の記録を外部関数に抽出しなさい

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
function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth() ,today.getDate() + 30);
}
function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`name: ${invoice.dueDate.toLocaleDateString()}`);
}

// 構造体はローカル変数同様に扱える(参照渡しなので変更が伝わる)

