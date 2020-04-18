import {
  GET_STATS_SUCCESS,
} from './../actionTypes';

const initialState = {
  chartsData: {
    charges: [],
    income: [],
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

const chartsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STATS_SUCCESS:
      return {
        ...state,
        chartsData: {
          income: payload.data.income,
          charges: payload.data.charge,
        },
      };
    default:
      return state;
  }
};

export default chartsReducer;
