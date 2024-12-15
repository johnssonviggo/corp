const ctx = document.getElementById('myChart');

  new Chart(ctx, {
      type: 'bar',
    data: {
      labels: ['Blackjack', 'Paint 2.0'],
      datasets: [{
        label: 'Number of users',
        data: [localStorage.getItem('blackjack-stats'), localStorage.getItem('paint-stats')],
          borderWidth: 1,
        hoverBackgroundColor: 'Mercury',
        backgroundColor: [
          'rgba(191, 191, 191, 0.5)',
          'rgba(171, 183, 183, 0.5)'
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

  

