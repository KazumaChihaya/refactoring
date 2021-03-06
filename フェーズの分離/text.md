# 方法
コードを別々のモジュールに分離する

# 動機
一つのコードが異なる二つの処理を行っている

# 効果
変更が必要になったとき、トピックごとに分けて対処することができる  
運が良ければ片方のモジュールの変更だけで済む


# 手順
* 後半となるフェーズのコードを関数として抽出する
* テストする
* 抽出した関数に追加される引数として、中間データ構造を導入する
* テストする
* 抽出した後半のフェーズの各パラメータを確認する。それらが前半のフェーズでも使われているなら中間データ構造へと移す。ひとつ移すごとにテストする
  * あるパラメータについては後半のフェーズで使うべきでないこともある　その場合はそのパラメータを使用した結果を、中間データ構造のフィールドとして抽出する　その後「ステートメントの呼び出し側への移動」を施して、この中間データ構造に値を格納している行を移動する。
* 前半のフェーズのコードに「関数の抽出」を施し、中間データ構造を返すようにする
  * 前半のフェーズを変換オブジェクトとして抽出してもよい