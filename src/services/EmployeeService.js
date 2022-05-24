import axios from 'axios';

const URL=""
class EmployeeService{
    getemployee(){
        return axios.get(URL);
    }

}

export default new EmployeeService;