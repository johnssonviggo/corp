const ctx = document.getElementById('myChart');

  new Chart(ctx, {
      type: 'bar',
    data: {
      labels: ['Blackjack', 'Paint 2.0'],
      datasets: [{
        label: '# of Votes',
        data: [localStorage.getItem('blackjack-stats'), localStorage.getItem('paint-stats')],
          borderWidth: 1,
        hoverBackgroundColor: 'hotpink',
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(153, 102, 255, 0.5)'
          ]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  

