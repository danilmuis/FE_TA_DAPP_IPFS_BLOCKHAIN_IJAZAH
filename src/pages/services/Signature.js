import axios from "axios";

export const signature  = (data)=> {
    console.log(data);
    return new Promise((resolve, reject) => {
        axios
            .post(process.env.VUE_APP_ENDPOINT_API+`/staff/signature`, data)
            .then(response => {
                resolve(response.data);
            })
            .catch(errors => {
                console.log(errors);
                reject(errors.response.data);
            });
    }); 
}

