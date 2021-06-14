// 1题
let s ="A"
console.log(s.toLocaleLowerCase())

// 2题
let l = "1234aadd2222656"
let k = 0
for (let i=0;i <l.length;i++) {
  if(!isNaN(l[i])) {
    k++
  }else {
    if(k >=5) {
      retrun
    }else {
      k =0
    }
  }
}
if (k >=5) {
  console.log('ok')
}

// 3题
let l = '125655656'
let newL = ''
for(i =0;i<l.length;i++) {
   newL =newL + (Number(l[i]) + 1)
}
console.log(newL)

// 4题
const fs =require('fs')
 fs.readFile('1.txt','utf-8',function(err,data){
   let result = data.split(',')
   console.log(result.length)
 })

// 5题
// let dic = {'-1': 100, '-2':200, 0:300, '-3':200}
// let newDic = {}
// let l = []
// let m
// for (k in dic) {
//   l.push(Number(k))
// }
// l.sort()
// for (let i=0;i)
// console.log(l)
// for (let i=0;i<l.length;i++) {
//   m = l[0]
//   if (l[i]>l[i+1]){
//    m=l[i]
//    console.log(l[i])
//   }
// }
// console.log(m)

// 6t题

// let ip_list= ['165.11.11.1','165.11.11.1','62.44.11.1','26.22.22.11']
// for (let i =0;i++;i<ip_list.length) {
  
// }