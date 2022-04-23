// バナーの印字を外部関数に抽出しなさい
// 明細の印字を内部関数に抽出しなさい

function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  // 未払金の計算 (calculate outstanding)
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 締め日の記録 (record due date)
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth() ,today.getDate() + 30);

  printDetails();

  function printDetails() {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`name: ${invoice.dueDate.toLocaleDateString()}`);
  }
}
function printBanner() {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}
