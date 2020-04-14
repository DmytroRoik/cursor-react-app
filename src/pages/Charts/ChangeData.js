import moment from 'moment';

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

const dateArr = data => data.map(it => it.date).sort((a, b) => a - b);

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

  for (let i = 0; i <= dateArr(user.charges).length; i += 1) {
    user.charges.forEach((item) => {
      if (item.date === dateArr(user.charges)[i]) {
        if (dataChart.dataLine.labels[dataChart.dataLine.labels.length - 1] !==
          dateArr(user.charges)[i]) {
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
  }

  const incomeData = [];
  for (let i = 0; i <= dateArr(user.income).length; i += 1) {
    user.income.forEach((item) => {
      if (item.date === dateArr(user.income)[i]) {
        if (incomeData[incomeData.length - 1] !== dateArr(user.charges)[i]) {
          dataChart.dataLine.datasets[1].data.push(item.price);
          incomeData.push(item.date);
        } else {
          const idx = dataChart.dataLine.datasets[1].data.length - 1;
          const prevItem = dataChart.dataLine.datasets[1].data[idx];
          dataChart.dataLine.datasets[1].data[idx] = prevItem + item.price;
          i += 1;
        }
      }
    });
  }

  dataChart.dataLine.labels = dataChart.dataLine.labels.map(item =>
    moment.unix(item).utc().format('ddd'));
  dataChart.dataLine.labels = dataChart.dataLine.labels.slice(Week ? -7 : -30);
  dataChart.dataLine.datasets[0].data =
  dataChart.dataLine.datasets[0].data.slice(Week ? -7 : -30);
  dataChart.dataLine.datasets[1].data =
  dataChart.dataLine.datasets[1].data.slice(Week ? -7 : -30);

  return dataChart;
};

export default changeData;
