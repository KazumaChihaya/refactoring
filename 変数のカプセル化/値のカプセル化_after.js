// defaultOwnerに対して変数のカプセル化(値のカプセル化)を施しなさい

let defaultOwner = {firstName: "Martin", lastName: "Fowler"};
export function defaultOwner() {return Object.assign({}, defaultOwner);}
export function setDefaultOwner(arg) {defaultOwner = arg;}

// データのコピーを返すようにgetterを作成
// 参照側でオブジェクトの値を変更してもこちらは変更されない