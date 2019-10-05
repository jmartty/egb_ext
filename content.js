window.setInterval(function() {
  var bets = document.querySelectorAll('.bet-rate,.table-my-bets__col-2')
  for(var i = 0;i < bets.length;i++) {
    var num = bets[i].textContent.split(' ')[0]
    var perc = Math.round(100/parseFloat(bets[i].textContent))
    bets[i].textContent = num + ' ' + perc + '%'
  }
}, 2000);