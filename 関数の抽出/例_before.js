// 明細の印字を内部関数に抽出しなさい

function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();
  
  //明細の印字 (print details)
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}