import { environment } from '@env/environment';
import { QueryParamKey } from './core.constant';

// "http://localhost:4200"  see: window.location.origin
export const CURRENT_WINDOW_URL = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');

const API_ENDPOINT = environment.apiUrl;

// API Endpoints
export class ApiEndpoints {

    static readonly API_URL = API_ENDPOINT;

    static readonly AUTH = {
        CUSTOM_USER_REGISTRATION: API_ENDPOINT + ":8080/users/register",
        CUSTOM_USER_LOGIN: API_ENDPOINT + ":8080/users",
        LOGOUT: API_ENDPOINT + '/logout',
        TUTOR_REQUIREMENT:API_ENDPOINT+':8083/tutor-requirements',
    };

    static readonly SEARCH = {
        // JOB_SEARCH: API_ENDPOINT + '/search/job/all',
        // CANDIDATE_SEARCH: API_ENDPOINT + '/search/candidate',
        TUTOR_REQUIREMENT_SEARCH : API_ENDPOINT + ':8081/search?'
    };

    // static readonly USERS = {
    //     MAIN: API_ENDPOINT + '/users',
    //     ME: API_ENDPOINT + '/users/me'
    // };

}