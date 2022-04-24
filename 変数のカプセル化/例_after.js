// defaultOwnerに対して変数のカプセル化を施しなさい

// 呼び出しがわで、参照を見つけたらgetterの呼び出しに、代入を見つけたらsetterの呼び出しに変更する
let defaultOwnerData = {firstName: "Martin", lastName: "Fowler"};
export function defaultOwner() {return defaultOwnerData;}
export function setDefaultOwner(arg) {defaultOwnerData = arg;}