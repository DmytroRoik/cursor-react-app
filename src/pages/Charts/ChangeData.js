import moment from 'moment';
import { extendMoment } from 'moment-range';

const { range } = extendMoment(moment);

function createData(userData, week, bgBlue = false) {
  const result = {
    labels: [],
    datasets: [
      {
        backgroundColor: bgBlue ?
          'rgba(148, 195, 239, 1)'
          :
          ['#008cd9', '#ff422f', '#ff9600', '#cfdd01'],
        data: [],
      },
    ],
  };

  const dataWeek = week ? userData.slice(-7) : userData.slice(-30);

  dataWeek.forEach((item) => {
    if (!result.labels.includes(item.category)) {
      result.labels.push(item.category);
      result.datasets[0].data.push(0);
    }
  });

  for (let i = 0; i <= result.labels.length; i += 1) {
    dataWeek.forEach((item) => {
      if (result.labels[i] === item.category) {
        result.datasets[0].data[i] += item.price;
      }
    });
  }

  return result;
}

const getPriceByDay = (userData, labels) =>
  labels.map(label =>
    userData.reduce((acc, current) => {
      if (label === Number(moment(current.date).startOf('day'))) {
        return acc + current.price;
      }
      return acc;
    }, 0));

const changeData = (user, week) => {
  const Week = week;
  const dataChart = {
    dataLine: {
      labels: [],
      datasets: [
        {
          label: 'Charges',
          data: [],
          backgroundColor: 'rgb(122,169,243,0.2)',
          borderColor: 'rgba(122,169,243,1)',
          borderWidth: 3,
        },
        {
          label: 'Income',
          data: [],
          backgroundColor: 'rgba(255,255,255,0)', //  background - fro chart data
          borderColor: 'rgba(173,173,173,0.51)', //  border settings
          borderDash: [5, 5],
          borderWidth: 2,
        },
      ],
    },
    dataCharges: createData(user.charges, Week),
    dataIncome: createData(user.income, Week, true),
  };

  const dateTo = moment().startOf('day');
  const dateFrom = Week ?
    moment().startOf('day').subtract(1, 'w') :
    moment().startOf('day').subtract(1, 'months');
  const timeRange = range([dateFrom, dateTo]);

  dataChart.dataLine.labels =
    Array.from(timeRange.by('d'))
      .map(item => Number(item));


  dataChart.dataLine.datasets[0].data =
    getPriceByDay(user.charges, dataChart.dataLine.labels);
  dataChart.dataLine.datasets[1].data =
    getPriceByDay(user.income, dataChart.dataLine.labels);

  dataChart.dataLine.labels = dataChart.dataLine.labels.map(item =>
    moment(item).format('ddd'));

  return dataChart;
};

export default changeData;
