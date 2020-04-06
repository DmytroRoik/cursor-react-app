import moment from 'moment';


function createData(userData, bgBlue = false) {
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
  userData.forEach((item) => {
    if (!result.labels.includes(item.category)) {
      result.labels.push(item.category);
      result.datasets[0].data.push(0);
    }
  });

  for (let i = 0; i <= result.labels.length; i += 1) {
    userData.forEach((item) => {
      if (result.labels[i] === item.category) {
        result.datasets[0].data[i] += item.price;
      }
    });
  }

  return result;
}

const changeData = (user) => {
  const Week = true;
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
    dataCharges: createData(user.charges),
    dataIncome: createData(user.income, true),
  };

  // dataLine
  const dateArr = user.charges
    .map(it => it.date)
    .sort((a, b) => a - b);

  for (let i = 0; i <= dateArr.length; i += 1) {
    user.charges.forEach((item) => {
      if (item.date === dateArr[i]) {
        if (dataChart.dataLine.labels[dataChart.dataLine.labels.length - 1] !== dateArr[i]) {
          dataChart.dataLine.datasets[0].data.push(item.price);
          dataChart.dataLine.labels.push(item.date);
        } else {
          const idx = dataChart.dataLine.datasets[0].data.length - 1;
          const prevItem = dataChart.dataLine.datasets[0].data[idx];
          dataChart.dataLine.datasets[0].data[idx] = prevItem + item.price;
          i += 1;
        }
      }
    });
    user.income.forEach((item) => {
      if (item.date === dateArr[i]) {
        if (dataChart.dataLine.labels[dataChart.dataLine.labels.length - 1] !== dateArr[i]) {
          dataChart.dataLine.datasets[1].data.push(item.price);
        } else {
          const idx = dataChart.dataLine.datasets[1].data.length - 1;
          const prevItem = dataChart.dataLine.datasets[1].data[idx];
          dataChart.dataLine.datasets[1].data[idx] = prevItem + item.price;
          i += 1;
        }
      }
    });
  }

  dataChart.dataLine.labels = dataChart.dataLine.labels.map(item => moment.unix(item).utc().format('ddd'));

  if (Week) {
    dataChart.dataLine.labels = dataChart.dataLine.labels.slice(-7);
    dataChart.dataLine.datasets[0].data = dataChart.dataLine.datasets[0].data.slice(-7);
    dataChart.dataLine.datasets[1].data = dataChart.dataLine.datasets[1].data.slice(-7);
  } else {
    dataChart.dataLine.labels = dataChart.dataLine.labels.slice(-30);
    dataChart.dataLine.datasets[0].data = dataChart.dataLine.datasets[0].data.slice(-30);
    dataChart.dataLine.datasets[1].data = dataChart.dataLine.datasets[1].data.slice(-30);
  }


  return dataChart;
};

export default changeData;
