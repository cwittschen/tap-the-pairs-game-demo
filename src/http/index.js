import axios from 'axios';

import getURLSearchParams from './get-url-search-params';

const http = {
    /**
     * @param {string} url
     * @returns {Promise<Response>}
     */
    get(url) {
        return axios.get(url);
    },

    /**
     * @param {string} url
     * @param {Object<string>} params
     * @returns {Promise<Response>}
     */
    postWithFormUrlEncoded(url, params) {
        return axios({
            url,
            method: 'POST',
            data: getURLSearchParams(params),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
    }
}

export default http;
