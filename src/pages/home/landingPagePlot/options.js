export default {
  legend: {
    display: false
  },
  elements: {
    point: {
      radius: 0
    }
  },
  scales: {
    xAxes: [{
      type: 'time',
      gridLines: {
        display: false
      }
    }],

    yAxes: [{
      stacked: true,
      gridLines: {
        display: true
      }
    }]
  }
}
