import axios from "axios";
export const regisSuperAdmin  = (data)=> {
    return new Promise((resolve, reject) => {
        axios
            .post('http://192.168.100.96:8090/regisSuperAdmin', data)
            .then(response => {
                resolve(response.data);
            })
            .catch(errors => {
                reject(errors.response.data);
            });
    }); 
}

export const regisStaff  = (data)=> {
    return new Promise((resolve, reject) => {
        axios
            .post('http://192.168.100.96:8090/regisStaff', data)
            .then(response => {
                resolve(response.data);
            })
            .catch(errors => {
                reject(errors.response.data);
            });
    }); 
}