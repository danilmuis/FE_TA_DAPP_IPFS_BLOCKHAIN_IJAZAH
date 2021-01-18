import axios from "axios";
// export const regisSuperAdmin  = (data)=> {
//     return new Promise((resolve, reject) => {
//         axios
//             .post(process.env.VUE_APP_ENDPOINT_API+`/registrasi`, data)
//             .then(response => {
//                 resolve(response.data);
//             })
//             .catch(errors => {
//                 reject(errors.response.data);
//             });
//     }); 
// }

export const regisStaff  = (data)=> {
    return new Promise((resolve, reject) => {
        axios
            .post(process.env.VUE_APP_ENDPOINT_API+`/registrasi`, data)
            .then(response => {
                resolve(response.data);
            })
            .catch(errors => {
                reject(errors.response.data);
            });
    }); 
}