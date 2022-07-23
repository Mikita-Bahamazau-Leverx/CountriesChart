import { Dispatch } from "redux";
import { IDefaultAction } from "../interfaces/actions";

export const defaultAction = ({
  apiFunction,
  types: { start, success, error },
}: IDefaultAction) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: start });
    return apiFunction()
      .then((data) => {
        return dispatch({
          type: success,
          data,
        });
      })
      .catch((reqErr) => {
        return dispatch({
          type: error,
          error: reqErr,
        });
      });
  };
};
