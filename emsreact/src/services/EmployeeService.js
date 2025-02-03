import axios from "axios";
import React from 'react';
const REST_API_BASE_URL='http://localhost:8083/api/allemployees';



export const listEmployees=()=> axios.get(REST_API_BASE_URL);
