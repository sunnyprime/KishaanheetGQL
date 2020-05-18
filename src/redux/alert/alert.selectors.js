import {createSelector} from 'reselect';

const selectAlert = (state) => state.alerts;

export const selectAlerts = createSelector(
    [selectAlert],
    (message) => alert.message,
);

// console.log("data");
