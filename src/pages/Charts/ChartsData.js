const user = {
  charges: [
    {
      category: 'foot',
      desc: '',
      date: '12/03/19',
      price: 123,
    },
    {
      category: 'foot',
      desc: '',
      date: '12/03/19',
      price: 123,
    },
    {
      category: 'foot',
      desc: '',
      date: '12/03/19',
      price: 123,
    },
  ],
};

const chartsData = {
  summaryData: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], //  X-axis
    datasets: [
      {
        label: 'Charges', // chart-name
        data: [12, 17, 34, 16, 45, 38, 20], // chart-data
        backgroundColor: 'rgba(255,255,255,0)', //  background - fro chart data
        borderColor: 'rgba(173,173,173,0.51)', //  border settings
        borderDash: [5, 5],
        borderWidth: 2,
      },
      {
        label: 'Income',
        data: [23, 24, 35, 60, 30, 40, 35],
        backgroundColor: 'rgb(122,169,243,0.2)',
        borderColor: 'rgba(122,169,243,1)',
        borderWidth: 3,
      },
    ],
  },
  incomeData: {
    labels: ['My mom', 'Sale book', 'Donations', 'Work'], //  Xaxis
    datasets: [
      {
        label: 'Income categories',
        data: [490, 480, 420, 390],
        backgroundColor: 'rgba(148, 195, 239, 1)',
        barPercentage: 0.5, //  bar width settings
      },
    ],
  },
  chargesData: {
    labels: ['Pets', 'Food', 'Restoraunts', 'Clothes'],
    datasets: [
      {
        backgroundColor: ['#008cd9', '#ff422f', '#ff9600', '#cfdd01'],
        data: [584, 458, 102, 345],
      },
    ],
  },
  optionsLine: {
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
      yAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      }],
    },
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 50,
        bottom: 0,
      },
    },
    maintainAspectRatio: false, // enable chart size editing
  },
  optionsBar: {
    scales: {
      yAxes: [{
        gridLines: {
          display: false, //  disable grid displaying
        },
        ticks: {
          beginAtZero: true, // enable chart starting at 0 point in Y-axis
        },
      }],
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
    },
    maintainAspectRatio: false, // enable chart size editing
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 50,
        bottom: 0,
      },
    },
  },
  optionsPie: {
    scales: {
      yAxes: [{
        gridLines: {
          display: false, //  disable grid displaying
        },
        ticks: {
          display: false,
        },
      }],
      xAxes: [{
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      }],
    },
    maintainAspectRatio: false, // enable chart size editing
    legend: {
      display: true,
      position: 'right',
    },
  },
};


export default chartsData;
