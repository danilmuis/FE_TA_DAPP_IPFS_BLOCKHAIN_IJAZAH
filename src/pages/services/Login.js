import axios from "axios";
export const login  = (data)=> {
    return new Promise((resolve, reject) => {
        axios
            .post(process.env.VUE_APP_ENDPOINT_API+`/login`, data)
            .then(response => {
                resolve(response.data);
            })
            .catch(errors => {
                reject(errors.response.data);
            });
    }); 
}