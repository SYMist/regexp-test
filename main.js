const str = `
010-1234-1234
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

// const regexp = new RegExp('the', 'gi')
const regexp = /fox/gi
// console.log(str.match(regexp))
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))

const regexp2 = /the/gi
console.log(str.match(regexp2))

const regexp3 = /\.$/gi
// 백슬래시(이스케이프 문자): 본래의 기능에서 벗어나 상태가 바뀌는 문자. /./는 특정한 기능을 수행하는데, 그 기능을 수행하지 말고 '.' 자체의 문자로 적용하라는 의미
//$: 반드시 마침표 뒤에다 붙임. 달러 앞에 있는 하나의 단어로 해당하는 줄이 끝나는 부분을 찾아서 끝나는 부분을 일치시킨다는 의미
console.log(str.match(regexp3))
//null

const regexp4 = /\.$/gim
console.log(str.match(regexp4))
// 모든 줄의 끝나는 부분에 마침표가 있는지 확인하고, 마침표가 있는 부분이 있으면 그 부분을 배열의 아이템으로 만들어서 반환함

console.log(
  str.match(/d$/gm)
)

console.log(
  str.match(/^t/gim)
)

console.log(
  str.match(/./g)
)

console.log(
  str.match(/h..p/g)
)

console.log(
  str.match(/fox|dog/g)
)

console.log(
  str.match(/https?/g)
)

console.log(
  str.match(/d{2}/g)
)

console.log(
  str.match(/d{2,}/g)
)

console.log(
  str.match(/d{2,3}/g)
)

console.log(
  str.match(/\b\w{2,3}\b/g)
)

// \w = 숫자를 포함한 영어 알파벳
// \b = 단어의 경계를 의미함


console.log(
  str.match(/[fox]/g)
)

console.log(
  str.match(/[0-9]{1,}/g)
)

console.log(
  str.match(/[가-힣]/g)
)

console.log(
  str.match(/\w/g)
)

console.log(
  str.match(/\bf\w{1,}\b/g)
)

console.log(
  str.match(/\d{1,}/g)
)

console.log(
  str.match(/\s/g)
)

const h = `  the hello  world   !

`

console.log(
  h.match(/\s/g)
)

console.log(
  h.replace(/\s/g, '')
)

console.log(
  str.match(/.{1,}(?=@)/g)
)

console.log(
  str.match(/(?<=@).{1,}/g)
)