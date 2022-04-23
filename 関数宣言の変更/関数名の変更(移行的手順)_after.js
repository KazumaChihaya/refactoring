// circum関数を移行的な手順で、省略のない正しい関数名に変更しなさい

// circum関数を呼び出しているコードに対して、circum関数に「関数のインライン化」を施す(circumの呼び出しをcircumの中身、つまりcircumferenceの呼び出しに変える)
// その後、circum関数は削除する
function circum(radius) {
  return circumference(radius);
}
function circumference(radius) {
  return 2 * Math.PI * radius;
}