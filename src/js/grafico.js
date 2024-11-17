const ctx = document.getElementById('line-chart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Meta', 2024, 2030, 2050],
    datasets: [{
      label: 'Temperatura média global acima da média pré-industrial',
      data: [2, 1.54, 2, 3,5 ],
      borderWidth: 1
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
