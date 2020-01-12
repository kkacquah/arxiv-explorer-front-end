export default {
  legend: {
    display: false
  },
  elements: {
    point: {
      radius: 0
    }
  },
  hover: {
      mode: 'nearest',
      intersect: false
    },
    tooltips: {
      mode: 'nearest',
      intersect: false
    },
  maintainAspectRatio: false,
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
