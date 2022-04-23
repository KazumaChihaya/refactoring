// 明細の印字を内部関数に抽出しなさい

function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetails();

  function printDetails() {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
  }
}