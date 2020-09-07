import {MAIN_URL} from './Url';
import axios from 'axios';
export function postAdminRegister(data)
{
    return axios.post(`${MAIN_URL}register`,data);
}
