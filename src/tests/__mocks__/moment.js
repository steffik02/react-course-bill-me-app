// this is the equivalent of importing the actual moment
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};