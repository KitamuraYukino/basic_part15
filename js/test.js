/*
// メソッド
const teacher={
  name:'太郎',
  subject:'国語',
  profile: function(){console.log('担当教科は国語です');}
}

teacher.profile();

// 引数
function sumNum(x){
  const result=x+1
  console.log(result);
};

sumNum(10);

function sumXY(x,y){
  const result=x+y;
  console.log(result);
};

sumXY(5,20);

function showText(z){
  console.log(z);
};

showText(`引数`);

// コールバック関数
function tomato(price,func){
  const name='とまと';
  func(name,price);
}

function showPrice(name,price){
  console.log(name+'の値段は'+price+'円です。');
}

tomato(100,showPrice);
*/

// 課題
// 1.プロパティーとメソッドの違い
/* プロパティーとはkeyに対してvalueの値のある1まとまりを表し、
メソッドとはkeyに対してvalueに当たる値の中にfunction等の関数を当てたもの。*/

// メソッド１
const flower={
  name: 'ひまわり',
  color: 'yellow',
  introduction: function(){
    console.log(this.name+'は'+this.color+'です。');
  },
};

flower.introduction();

// メソッド２
const cat={
  name: 'くろ',
  age: 3,
  profile: function(){
    console.log(this.name+'は'+this.age+'歳の猫です。');
  },
};

cat.profile();

// メソッド３
const flowers={
    name: 'ひまわり',
    color: 'yellow',
    season: 'summer',
    show: function() {
      console.log(flowers.name);
    },
  };

  flowers.show()


  // 2.
  function fruit(name,price){
    const result= name+'の値段は'+price+'円です。'
    return result
  };

console.log(fruit('いちご',500));


// 3.
// priceは値段
// funcは実行する関数名
// 税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)
function addTax(price,func){
  const taxPrice=Math.round(price*1.10);
  func(vegetable,taxPrice);
};

const vegetable=['トマト','玉ねぎ'];
// トマトの税込み価格をコンソールに表示させる処理
function showFirstPrice(vegetable,price){
  console.log(vegetable[0]+'は税込み￥'+price);
}
addTax(300,showFirstPrice);
// 玉ねぎの税込み価格をコンソールに表示させる処理
function showSecondPrice(vegetable,price){
  console.log(vegetable[1]+'は税込み￥'+price);
}
addTax(500,showSecondPrice)