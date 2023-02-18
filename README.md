# BIP39まとめ

## 概要
Mnemonic(ウォレットのマスターキーみたいなもの) を作るための標準。
Menmonicは通常12~24の英単語の羅列で一つ一つの単語は11bitのテーブルが存在している。

## 作り方
1. entropy作成
2. entropyの末尾にチェックサムをつける（11bitの整数倍になるように長さを調整）
3. 11bitにエントロピーを区切る
4. 11bitに対応した単語テーブルを使って単語の羅列に変換する

##　インターフェース

### generateMnemonic
```js
```
エントリーポイント。ランダムなMnemonicを生成する。

### mnemonicToSeed
```js
mnemonicToSeed(mnemonic: string, password?: string): Promise<Buffer>;
```
Mnemonic + Passphrase => Seedを作る

###  mnemonicToEntropy(mnemonic: string, wordlist?: string[]): string;
```js
mnemonicToEntropy(mnemonic: string, wordlist?: string[]): string;
```
Mnemonic + Wordlist => Entropyに逆マッピングする
（EntropyとMnemonicが等価であることが分かる）

### entropyToMnemonic
```js
entropyToMnemonic(entropy: Buffer | string, wordlist?: string[]): string;
```
Entropy + Wordlist => Mnemonicにマッピングする

