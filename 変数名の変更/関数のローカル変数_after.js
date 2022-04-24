//変数のスコープが広いtpHdに対するリファクタリングを施しなさい

result += `<h1>${title()}</h1>`;

setTitle(obj['articleTitle']);

let _title = "untitled";
function title() {return _title;}
function setTitle(arg) {_title = arg;}