import axios from 'axios';


const REST_API_BASE_URL = "http://localhost:8083/api/employees";


export const listEmployees = () =>{
    return axios.get(REST_API_BASE_URL+"/allemployees");
}


export const createEmployee = (employee) =>{
    return axios.post(REST_API_BASE_URL+"/newemployee", employee);
}

