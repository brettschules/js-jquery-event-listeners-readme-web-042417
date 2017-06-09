//define functions here

$(document).ready(function(){





frameIt()

getIt()

pressIt()

submitIt()

});

function getIt() {
  $('p').click(function(){
    alert("Hey!");
  })
}

function frameIt() {
  $('img').load(function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').keydown(function(event) {
    if(event.which === 71) {
      alert("g key was pressed down")
    }
  })
}

function submitIt() {
  $('form').submit(function (event) {
    alert('Your form is going to be submitted now.')
    event.preventDefault()
  })
}
