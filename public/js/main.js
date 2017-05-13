let $ = window.jQuery

let calcExpressionArr = []

let number = ''
let operator = ''
let sum = $('#sum')
sum.html('0')

// When C is clicked all is cleared.
function clearSum () {
  calcExpressionArr = []
  number = ''
  sum.html('0')
}

// When the decimal is clicked it appends a decimal to the number.
function appendDecimal () {
  number = number + '.'
  sum.html(number)
}

function calculateSum () {
  let total = calcExpressionArr.reduce(function (
    accum, currentValue, index, arr) {
    let newnum = parseFloat(arr[index + 1])
    accum = parseFloat(accum)
    if (currentValue === '+') {
      accum += newnum
    } else if (currentValue === '-') {
      accum -= newnum
    } else if (currentValue === 'x') {
      accum *= newnum
    } else if (currentValue === '/') {
      accum /= newnum
    }
    return accum
  }, calcExpressionArr[0])
  return total
}

disableOperator()

$('#calc .num').click((e) => {
  number += e.target.innerHTML
  sum.html(number)
  enableOperator()
})

$('#calc .operator').click((e) => {
  operator = e.target.innerHTML
  calcExpressionArr.push(number, operator)
  sum.html(number + operator)
  number = ''
  disableOperator()
})

$('#equals').click(() => {
  calcExpressionArr.push(number)
  let total = calculateSum()
  sum.html(total)
  disableOperator()
  calcExpressionArr = []
  number = total
  enableOperator()
})

$('#decimal').click(() => {
  appendDecimal()
})

$('#clearall').click(() => {
  clearSum()
  disableOperator()
})

function disableOperator () {
  $('.operator').attr('disabled', true)
}

function enableOperator () {
  $('.operator').attr('disabled', false)
}
