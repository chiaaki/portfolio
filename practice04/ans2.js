const dairyProductLists =[{
    productId: 1, productCategory: "牛乳", productName: "みつ葉牛乳", productPrice: 200, stockQuantity: 30, expiryDate: "2021/10/1", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 2, productCategory: "牛乳", productName: "がっつり濃厚5.2", productPrice: 420, stockQuantity: 15, expiryDate: "2021/10/8", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 3, productCategory: "バター", productName: "みつ葉バター", productPrice: 1150, stockQuantity: 10, expiryDate: "2021/11/1", src:"./images/butter.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 4, productCategory: "バター", productName: "サルピス発酵バター", productPrice: 1200, stockQuantity: 8, expiryDate: "2021/12/15", src:"./images/butter.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 5, productCategory: "牛乳", productName: "花印マグミルク牛乳", productPrice: 190, stockQuantity: 5, expiryDate: "2021/10/4", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 6, productCategory: "バター", productName: "花印無塩北海道バター", productPrice: 200, stockQuantity: 5, expiryDate: "2021/10/28", src:"./images/butter.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 7, productCategory: "バター", productName: "大正チューブバター", productPrice: 320, stockQuantity: 10, expiryDate: "2021/10/30", src:"./images/butter.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 8, productCategory: "牛乳", productName: "田中牛乳", productPrice: 275, stockQuantity: 25, expiryDate: "2021/10/3", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 9, productCategory: "牛乳", productName: "大正おいしい牛乳", productPrice: 330, stockQuantity: 25, expiryDate: "2021/10/9", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 10, productCategory: "ヨーグルト", productName: "大正ブルガリアヨーグルト", productPrice: 200, stockQuantity: 25, expiryDate: "2021/10/5", src:"./images/yorgurt.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 11, productCategory: "ヨーグルト", productName: "大正P-1ヨーグルト", productPrice: 140, stockQuantity: 35, expiryDate: "2021/10/15", src:"./images/yorgurt.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 12, productCategory: "ヨーグルト", productName: "山梨生乳100%ヨーグルト", productPrice: 250, stockQuantity: 25, expiryDate: "2021/10/11", src:"./images/yorgurt.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 13, productCategory: "牛乳", productName: "山梨低温殺菌牛乳", productPrice: 340, stockQuantity: 25, expiryDate: "2021/10/4", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 14, productCategory: "バター", productName: "ホタテバター", productPrice: 1500, stockQuantity: 5, expiryDate: "2021/12/8", src:"./images/butter.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 15, productCategory: "ヨーグルト", productName: "10日分の鉄分飲むヨーグルト", productPrice: 90, stockQuantity: 35, expiryDate: "2021/10/20", src:"./images/yorgurt.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 16, productCategory: "ヨーグルト", productName: "大山田イミューンヨーグルト", productPrice: 200, stockQuantity: 25, expiryDate: "2021/10/19", src:"./images/yorgurt.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 17, productCategory: "牛乳", productName: "大山田農場3.8牛乳", productPrice: 200, stockQuantity: 15, expiryDate: "2021/10/3", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 18, productCategory: "バター", productName: "大山田極上バター", productPrice: 750, stockQuantity: 10, expiryDate: "2021/11/19", src:"./images/butter.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 19, productCategory: "牛乳", productName: "大山田あきば", productPrice: 200, stockQuantity: 30, expiryDate: "2021/10/6", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 20, productCategory: "牛乳", productName: "大山田いちご", productPrice: 200, stockQuantity: 25, expiryDate: "2021/10/2", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}
];
const NOWDATE = "2021/10/1";
const NOW = new Date(NOWDATE);
const LIMIT3DAYS = new Date(NOW.setDate(3));
const LIMIT7DAYS = new Date(NOW.setDate(7));
//元リストのコピー
const NOMALLIST = dairyProductLists.slice();
let Checkbox = document.getElementById("check");
let di;


//賞味期限順に並び変え
function printExpirySort(arr) {
    if (!arr) arr = dairyProductLists;
    const EXPIRY = arr.sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate));
    printSalePage(EXPIRY);
}


// function discountPage() {
//     for(let dcitem of dairyProductLists) {
//         let dcProductPrice = dcitem.productPrice;
//         const LIMIT2 = new Date(dcitem.expiryDate);   
//     if(LIMIT2 <= LIMIT3DAYS) {
//         dcProductPrice = Math.floor(dcProductPrice / 2);
//         console.log(dcProductPrice);
//     } else if(LIMIT2 <= LIMIT7DAYS) {
//         dcProductPrice = Math.floor(dcProductPrice * 0.8);
//         console.log(dcProductPrice);
//     }
// }
// }

function printSalePage(item){
    deleteLIST();
    item.forEach(ele => container.insertAdjacentHTML('beforeend',`
    <div class="itembox">
    <div class="box-left">
    <p>${ele.productCategory}</p>
    <img src="${ele.src}">
    </div>
    <div class="box-right">
    <h2>${ele.productName}</h2>
    <span id="price${ele.productId}">価格：${ele.productPrice}円</span><span>在庫：${ele.stockQuantity}</span>
    <form>
        <label for="Purchase-number">個数</label>
        <input type="text" class="Purchase-number" id="Purchase-number${ele.productId}" name="Purchase-number">
        <input class="btn" type="button" onclick="buyItem(${ele.productId})" value="購入する">
    </form>
    <p>${ele.comment}</p>
    </div>
    </div>`));
}


//問題１
//消費期限(expiryDate)が近いものから順番に並べ替えて表示する関数printExpirySale()を作成してください。
//HTMLのボタンに割り当ててあるので、実際に動作するか確認すること。

//問題2
//順番を並び替えた状態から元に戻せるようにしてください。
//HTMLのボタンに割り当てること。

//containerの子要素を消す（最後の子要素まで繰り返し）
function deleteLIST() {
    const LIST = document.getElementById('container');
    while (LIST.lastChild) {
        LIST.removeChild(LIST.lastChild);
    }
}

//問題3
//消費期限順に並び変えた上で、消費期限が3日以内の商品は半額、一週間以内のものは2割引きとして表示しなおす関数を作成してください。
//また、半額、2割引きになったことを表示するようにしてください。今日は2021年10月1日とします。
//HTMLのチェックボックスに割り当てること。


// function discountMode() {
//     // discountPage();
//     discount();
//     // let totalPrice = 0;
//     //const BUYVALUES = document.getElementById(`Purchase-number${id}`);
//     // for (let item of discountList) {
//     //     let noOfitems = document.getElementById(`Purchase-number${item.productId}`).value;
//     //     totalPrice += noOfitems * item.productPrice;
//     //     if (noOfitems > item.stockQuantity) {
//     //         window.alert(`商品在庫がありません。`);
//     //         return ;
//     //     }
//     // }
//         // const BUY = window.confirm(`合計${totalPrice}です。購入しますか？`);
//         // if (BUY === true) {
//         //     window.alert(`購入しました！`);
//         // } else {
//         //     window.alert(`購入をキャンセルしました。`);
//         // }

//     }

function discount() {
    const discountList = JSON.parse(JSON.stringify(dairyProductLists));
    printExpirySort(discountList);
    if(Checkbox.checked){
     for (let item of discountList) {
        const LIMIT = new Date(item.expiryDate);
        if (LIMIT <= LIMIT3DAYS) {
            item.productPrice = Math.floor(item.productPrice / 2);
            document.getElementById(`price${item.productId}`).innerHTML = `価格：${item.productPrice}円　半額！`
            document.getElementById(`price${item.productId}`).style.color = "red";
            
        } else if (LIMIT <= LIMIT7DAYS) {
            item.productPrice = Math.floor(item.productPrice * 0.8);
            document.getElementById(`price${item.productId}`).innerHTML = `価格：${item.productPrice}円　2割引！`
            document.getElementById(`price${item.productId}`).style.color = "red";
        }
    }
    return discountList;
}
    return dairyProductLists;
}

function bargainPrice() {
    let arr = JSON.parse(JSON.stringify(dairyProductLists));
    if(Checkbox.checked) {
        for(let ele of arr) {
        let limitDate = (Date.parse(ele.expiryDate) - Date.parse(NOWDATE)) / (24 * 60 * 60 * 1000);
        if(limitDate <= 3) {
            ele.productPrice = Math.floor(ele.productPrice * 0.5);
        } else if(limitDate <= 7) {
            ele.productPrice = Math.floor(ele.productPrice * 0.8);
        }
    } return arr;
} else {
    return dairyProductLists;
}
}

function chexboxChange() {
    Checkbox.addEventListener("change", function change() {
        if (Checkbox.checked) {
            discount();
        } else {

            printSalePage(NOMALLIST);
        }
    })
}

//問題4
//購入ボタンを押すことで商品を購入する関数を作成してください。
//在庫以上の注文についてはアラートを表示し、ユーザーに注意喚起するようにしてください。
//また、価格の横に在庫数の欄を新しく設けてください。

function buyItem(id) {
    const BUYITEMS = document.getElementById(`Purchase-number${id}`);
    const VALUE = BUYITEMS.value;
    di = bargainPrice();

    if(VALUE == 0) {
        window.alert(`商品を選択してください`);
        return;
    }
  if (VALUE > di[id - 1].stockQuantity) {
        window.alert(`商品在庫が足りません。`);
    } else {
        const BUY = window.confirm(`${di[id - 1].productName}は${VALUE}個で${VALUE * di[id - 1].productPrice}円です。購入しますか？`);
        if (BUY === true) {
            window.alert(`購入しました！`);
        } else {
            window.alert(`購入をキャンセルしました。`);
        }
    }
}


//問題5
//それぞれの商品で入力した個数を基に合計金額を算出する関数を作成してください。
//在庫以上の注文についてはアラートを表示し、ユーザーに注意喚起するようにしてください。
//HTMLのボタンに割り当てること。


function togetherBuy() {
    // const noOfitems = document.getElementById(`Purchase-number${di[tid - 1].productId}`);
    // const TVALUE = noOfitems.value;
    let totalPrice = 0;
    di = bargainPrice();

    for (let item of di) {
        const noOfitems = document.getElementById(`Purchase-number${item.productId}`);
        const TVALUE = noOfitems.value;
        totalPrice += TVALUE * item.productPrice;
        if(totalPrice == 0) {
            window.alert(`商品を選択してください`);
            return;
        }
        // console.log(totalPrice,noOfitems,item.stockQuantity)
        if (TVALUE > item.stockQuantity) {
            window.alert(`商品在庫がありません。`);
            return ;
        }
    }
    const BUY = window.confirm(`合計${totalPrice}です。購入しますか？`);
        if (BUY === true) {
            window.alert(`購入しました！`);
        } else {
            window.alert(`購入をキャンセルしました。`);
        }
    }

printSalePage(dairyProductLists);