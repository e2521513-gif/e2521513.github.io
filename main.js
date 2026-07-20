function janken(myHand) {
    // じゃんけんの手を格納する変数を用意
    let handArray = ['ぐー', 'ちょき', 'ぱー'];

    // じゃんけんの結果の文字列を格納する変数を用意
    let resultArray = ['アイコです。', 'あなたの負けです。', 'あなたの勝ちです。'];

    // コンピュータの手
    let computerHand = 0;

    // じゃんけんの結果
    let result = 0;

    // じゃんけんの処理

    // プレイヤーの手を決定
    console.log('あなたの手は：' + handArray[myHand]);

    // コンピュータの手を決定
    let rand = Math.random() * 100;
    console.log('乱数：' + rand);

    let rand_int = Math.floor(rand);
    console.log('乱数（整数）：' + rand_int);

    // 
    computerHand = rand_int % 3;
    console.log('コンピュータの手は：' + handArray[computerHand]);

    // 勝敗判定 
    if (myHand === 0) {
        if (computerHand === 0) {
            result = 0;
        } else if (computerHand === 1) {
            result = 2;
        } else if (computerHand === 2) {
            result = 1;
        }
    } else if (myHand === 1) {
        if (computerHand === 0) {
            result = 1;
        } else if (computerHand === 1) {
            result = 0;
        } else if (computerHand === 2) {
            result = 2;
        }
    } else if (myHand === 2) {
        if (computerHand === 0) {
            result = 2;
        } else if (computerHand === 1) {
            result = 1;
        } else if (computerHand === 2) {
            result = 0;
        }
    } 

    // 上の勝敗判定を短くする
    // 論理演算子を使ってif文の入れ子をなくす
    // if (myHand === computerHand) {
    //     result = 0;
    // } else if ((myHand === 0) && (computerHand === 1)) {
    
    // } else if ...
    
    // 結果の表示
    console.log(resultArray[result]);
    console.log('--------------------');

    // HTMLに表示
    const janken_result = document.querySelector('#result');
    janken_result.textContent = resultArray[result];

} // 