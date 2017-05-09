let $ = window.jQuery

$(document).ready(function () {
// This checks to make sure the number isn't too long to fit in the sum box.
  let checkNumLength = (number) => {
    console.log(number)
    if (number.length > 9) {
      sum.text(number.substr(number.length - 9, 9))
      if (number.length > 15) {
        number = ''
        sum.text('Error')
      }
    }
  }

  let number = ''
  let newnum = ''
  let operator = ''
  let sum = $('#sum')
  sum.text('0')

// When any number on the calculator is clicked this makes 'number' set to the text of that button then sets 'sum' to that number.
  $('.num').click(function () {
    number += $(this).text()
    sum.text(number)
    checkNumLength(number)
  })

// When any of the operators are clicked this makes the 'operator' set to the text of that button then sets the first number that was clicked to 'newnum' so the second number clicked can be set to 'number'.
  $('.operator').click(function () {
    operator = $(this).text()
    newnum = number
    number = ''
    sum.text('0')
  })

// When C is clicked all is cleared.
  $('#clearall').click(function () {
    number = ''
    sum.text('0')
    if ($(this).attr('id') === 'clearall') {
      newnum = ''
    }
  })

// When the decimal is clicked it appends a decimal to the number.
  $('#decimal').click(function () {
    number = number + '.'
    sum.text(number)
    checkNumLength(number)
  })

// When the equals is clicked it checks the operator being done then converts 'number' and 'newnum' from a string to an integer and does the operation. Then converts the answer back to a string to be able to put it inside the sum box.
  $('#equals').click(() => {
    if (operator === '+') {
      number = (parseFloat(number)) + parseFloat(newnum).toString(10)
    } else if (operator === '-') {
      number = (parseFloat(newnum)) - parseFloat(number).toString(10)
    } else if (operator === '/') {
      number = (parseFloat(newnum)) / parseFloat(number).toString(10)
    } else if (operator === 'x') {
      number = (parseFloat(newnum)) * parseFloat(number).toString(10)
    }
    sum.text(number)
    checkNumLength(number)
    number = ''
    newnum = ''
  })
})
