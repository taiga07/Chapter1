// 再宣言
// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// const nickname = "taro"
// console.log(nickname)
// const nickname = "ichiro"
// console.log(nickname)

// 再代入
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// スコープ
// varのスコープ
// var str = "webcamp" //グローバルスコープ

// function foo(){
//   console.log(str)
//   var y = "hello"  //関数スコープ
// }

// foo()
// console.log(y)

// letのスコープ
// function foo(){
//   let x = "webcamp"
//   {
//     let y = "hello webcamp"
//   }
//   console.log(x)
//   console.log(y)
// }

// foo()

// for (let i=0;i<10;i++){
//   console.log(i)
// }

// console.log(i)

// constのスコープはletと同じ

// 巻き上げ
var str = "webcamp"

function foo(){
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()
