import Api from '../../api/api';
import {
  GET_STATS_START,
  GET_STATS_FAILURE,
  GET_STATS_SUCCESS,
} from './../actionTypes';

const getStats = date => async (dispatch) => {
  dispatch({
    type: GET_STATS_START,
  });

  try {
    const stats = await Api.getStats(date);
    dispatch({
      type: GET_STATS_SUCCESS,
      payload: stats,
    });
  } catch (err) {
    dispatch({
      type: GET_STATS_FAILURE,
      payload: err,
      error: true,
    });
  }
};

export default getStats;
