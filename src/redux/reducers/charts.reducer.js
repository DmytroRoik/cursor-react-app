const initialState = {
  chartsData: {
    charges: [
      {
        category: 'My mom',
        desc: '',
        date: 1585728960, // Sat
        price: 312,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1585642560, // Thu
        price: 534,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1585294095, // Fri
        price: 745,
      },
      {
        category: 'Work',
        desc: '',
        date: 1585556160, // Wed
        price: 235,
      },
      {
        category: 'My mom',
        desc: '',
        date: 1585466895, // Sun
        price: 645,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1585380495, // Sat
        price: 432,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1585207695,
        price: 375,
      },
      {
        category: 'Work',
        desc: '',
        date: 1585294095,
        price: 893,
      },
      {
        category: 'My mom',
        desc: '',
        date: 1585207695,
        price: 725,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1585121295,
        price: 645,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1584862095,
        price: 159,
      },
      {
        category: 'Work',
        desc: '',
        date: 1584775695,
        price: 357,
      },
      {
        category: 'My mom',
        desc: '',
        date: 1585207695,
        price: 645,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1584602895,
        price: 852,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1584516495,
        price: 756,
      },
      {
        category: 'Work',
        desc: '',
        date: 1584430095,
        price: 954,
      },
      {
        category: 'My mom',
        desc: '',
        date: 1584343695,
        price: 253,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1584257295,
        price: 153,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1584170895,
        price: 152,
      },
      {
        category: 'Work',
        desc: '',
        date: 1584084495,
        price: 985,
      },
      {
        category: 'My mom',
        desc: '',
        date: 1583998095,
        price: 546,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1583911695,
        price: 534,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1583825295,
        price: 356,
      },
      {
        category: 'Work',
        desc: '',
        date: 1583738895,
        price: 348,
      },
      {
        category: 'My mom',
        desc: '',
        date: 1583652495,
        price: 298,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1583566095, // Sat
        price: 198,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1583479695, // Fri
        price: 654,
      },
      {
        category: 'Work',
        desc: '',
        date: 1583393295, // Thu
        price: 356,
      },
      {
        category: 'My mom',
        desc: '',
        date: 1583306895, // Wed
        price: 865,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1583220495, // Tue
        price: 845,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1583134095, // Mon
        price: 846,
      },
      {
        category: 'Work',
        desc: '',
        date: 1583047695, // Sun
        price: 685,
      },
    ],
    income: [
      {
        category: 'My mom',
        desc: '',
        date: 1585728960, // Sat
        price: 453,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1585642560, // Thu
        price: 156,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1585294095, // Fri
        price: 874,
      },
      {
        category: 'Work',
        desc: '',
        date: 1585556160, // Wed
        price: 854,
      },
      {
        category: 'My mom',
        desc: '',
        date: 1585466895, // Sun
        price: 654,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1585380495, // Sat
        price: 365,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1585207695,
        price: 956,
      },
      {
        category: 'Work',
        desc: '',
        date: 1585294095,
        price: 865,
      },
      {
        category: 'My mom',
        desc: '',
        date: 1585207695,
        price: 265,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1585121295,
        price: 458,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1584862095,
        price: 421,
      },
      {
        category: 'Work',
        desc: '',
        date: 1584775695,
        price: 685,
      },
      {
        category: 'My mom',
        desc: '',
        date: 1585207695,
        price: 458,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1584602895,
        price: 753,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1584516495,
        price: 651,
      },
      {
        category: 'Work',
        desc: '',
        date: 1584430095,
        price: 423,
      },
      {
        category: 'My mom',
        desc: '',
        date: 1584343695,
        price: 354,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1584257295,
        price: 251,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1584170895,
        price: 458,
      },
      {
        category: 'Work',
        desc: '',
        date: 1584084495,
        price: 785,
      },
      {
        category: 'My mom',
        desc: '',
        date: 1583998095,
        price: 953,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1583911695,
        price: 751,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1583825295,
        price: 254,
      },
      {
        category: 'Work',
        desc: '',
        date: 1583738895,
        price: 154,
      },
      {
        category: 'My mom',
        desc: '',
        date: 1583652495,
        price: 245,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1583566095, // Sat
        price: 356,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1583479695, // Fri
        price: 541,
      },
      {
        category: 'Work',
        desc: '',
        date: 1583393295, // Thu
        price: 245,
      },
      {
        category: 'My mom',
        desc: '',
        date: 1583306895, // Wed
        price: 654,
      },
      {
        category: 'Sale bool',
        desc: '',
        date: 1583220495, // Tue
        price: 254,
      },
      {
        category: 'Donations',
        desc: '',
        date: 1583134095, // Mon
        price: 254,
      },
      {
        category: 'Work',
        desc: '',
        date: 1583047695, // Sun
        price: 356,
      },
    ],
  },
  chartsOptions: {
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
  },
};

const chartsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default chartsReducer;
