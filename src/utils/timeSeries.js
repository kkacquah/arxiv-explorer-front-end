const moment = require('moment');

export function convertIntsToMoments(timeSeriesData) {
  const timeSeriesDataWithMoments = timeSeriesData.map(datapoint => ({
    y: datapoint.y,
    t: moment(datapoint.t*1000)
  }));
  return timeSeriesDataWithMoments
}

export function convertQueryResponseToDataset(queryResponse) {
  const queryDataset = queryResponse.labels.map(label => ({
    label: label.name,
    backgroundColor: label.color,
    borderColor:label.color,
    data: convertIntsToMoments(queryResponse.data[label.name])
  }));
  return queryDataset
}
