const ctx = document.getElementById('line-chart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Meta', '2024 (jan-set)', '2030', '2050'],
    datasets: [{
      label: 'Temperatura média global acima da média pré-industrial em °C ',
      data: [2, 1.54, 2, 3,5 ],
      borderWidth: 1,
      backgroundColor: '#E3FF47',
      borderColor: '#E3FF47',
      pointHoverBackgroundColor: '#FFFFFF',

    

    }]
  },
  options: {
    scales: {
      x: {
        grid: {
            color: 'grey'
        }
      },

      y: {
        beginAtZero: true,
        grid: {
            color: 'grey'
        }
      }
    },
  }
});
