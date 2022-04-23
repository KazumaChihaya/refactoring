// バナーの印字を外部関数に抽出しなさい
// 明細の印字を内部関数に抽出しなさい

function printOwing(invoice) {
  let outstanding = 0;

  // バナーの印字 (print banner)
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  // 未払金の計算 (calculate outstanding)
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 締め日の記録 (record due date)
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth() ,today.getDate() + 30);

  // 明細の印字 (print details)
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`name: ${invoice.dueDate.toLocaleDateString()}`);
}