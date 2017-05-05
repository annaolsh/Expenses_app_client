$(document).ready(function () {

  const $form = $("form")
  const $results = $("#results")
  const url = 'http://localhost:3000/expenses'

  $.get(url).then(function(data){
    var expensesList = data.map(function (item) {
      return `<li>${item.product}</li><li>${item.cost}</li><li>${item.quantity}</li><li>${item.description}</li><li>${item.date}`
    }).join('')
    $results.html(expensesList)
  });

  $form.submit(function (event) {
    event.preventDefault()

    var expenseInput = $(this).serialize()

    var posting = $.post(url, expenseInput) //we need to write exact URL because this is different application
    posting.then(function(result) {
      for(attribute in result){
        $results.append(`<li>${result[attribute]}</li>`)
      }
    })
  })




})
