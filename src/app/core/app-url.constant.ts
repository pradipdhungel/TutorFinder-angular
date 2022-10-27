import { environment } from '@env/environment';
import { QueryParamKey } from './core.constant';

// "http://localhost:4200"  see: window.location.origin
export const CURRENT_WINDOW_URL = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');

const API_ENDPOINT = environment.production ? environment.prodApiUrl.baseUrl : environment.devApiUrl;

// API Endpoints
export class ApiEndpoints {

    static readonly API_URL = API_ENDPOINT;
    static readonly AUTHENTICATION_URL = API_ENDPOINT + (environment.production ? environment.prodApiUrl.authentication : ":8080");
    static readonly TUTOR_REQUIREMENT_URL = API_ENDPOINT + (environment.production ? environment.prodApiUrl.tutorRequirement : ":8083");
    static readonly TUTOR_REQUIREMENT_SEARCH_URL = API_ENDPOINT + (environment.production ? environment.prodApiUrl.tutorRequirementSearch : ":8081");
    static readonly RESERVATION_URL = API_ENDPOINT + (environment.production ? environment.prodApiUrl.reservation : ":8085");

    static readonly AUTH = {
        CUSTOM_USER_REGISTRATION: ApiEndpoints.AUTHENTICATION_URL + "/users/register",
        CUSTOM_USER_LOGIN: ApiEndpoints.AUTHENTICATION_URL + "/users",
        LOGOUT: API_ENDPOINT + '/logout',
        TUTOR_REQUIREMENT: ApiEndpoints.TUTOR_REQUIREMENT_URL  + "/tutor-requirements"
    };

    static readonly SEARCH = {
        // JOB_SEARCH: API_ENDPOINT + '/search/job/all',
        // CANDIDATE_SEARCH: API_ENDPOINT + '/search/candidate',
        TUTOR_REQUIREMENT_SEARCH: ApiEndpoints.TUTOR_REQUIREMENT_SEARCH_URL + '/search?'
    };

    static readonly RESERVATION = {
        ALL_REQUEST: ApiEndpoints.RESERVATION_URL + '/reservation/all-requests',
        APPROVE_RESERVATION: ApiEndpoints.RESERVATION_URL + '/reservation',
        GET_ALL_RESERVATIN_TUTOR: ApiEndpoints.RESERVATION_URL + '/reservation/all-by-tutor'
    }

    static readonly REQUIREMENT = {
        VIEW_REQUIREMENT: ApiEndpoints.TUTOR_REQUIREMENT_URL + "/tutor-requirements/students"
    }

    // static readonly USERS = {
    //     MAIN: API_ENDPOINT + '/users',
    //     ME: API_ENDPOINT + '/users/me'
    // };

}