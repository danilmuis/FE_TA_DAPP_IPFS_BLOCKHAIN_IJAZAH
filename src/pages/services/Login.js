import axios from "axios";
export const login  = (data)=> {
    return new Promise((resolve, reject) => {
        axios
            .post('http://192.168.100.96:8090/login', data)
            .then(response => {
                resolve(response.data);
            })
            .catch(errors => {
                reject(errors.response.data);
            });
    }); 
}