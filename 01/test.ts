// example data 
//-----------------------------------------
// 1abc2 || 12
// pqr3stu8vwx || 38
// a1b2c3d4e5f || 15
// treb7uchet || 77
// answer 142
import * as fs from 'node:fs'


function genArr(txtPath: string): string[] {
  const data = fs.readFileSync(txtPath, 'utf8')
  const dataArr = data.split('\n')
  return dataArr
}

// every string val1 + val2
// is something like "" + val1 + val2 so its a string
// then its converting to num like Number(val1 + val2)
// and then its going to the answer like answer += current

function findingDigits(str: string): number {
  let l = 0
  let r = str.length - 1
  let first: null | string = null
  let last: null | string = null
  while (l < str.length && r >= 0 && (first === null || last === null)) {
    if (first === null && !isNaN(Number(str[l]))) {
      first = str[l]
    }
    if (last === null && !isNaN(Number(str[r]))) {
      last = str[r]
    }
    r--
    l++
  }
  if (first && last) {
    let combine = first.concat(last)
    return parseInt(combine)
  }
  return 0
}

function calculate(data: string[]): number {
  let res = 0
  data.forEach((str) => {
    if(str) {
      res += findingDigits(str)
    }
  })
  console.log(res)
  return res
}

calculate(genArr('data2.txt'))
