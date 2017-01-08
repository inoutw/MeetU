/**
 * Created by qinai on 1/1/17.
 */
//Errors thrown by rejected Promises need to be caught, or they will be swallowed silently
const ApiUtils = {
    checkStatus: function(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
};
export default ApiUtils;