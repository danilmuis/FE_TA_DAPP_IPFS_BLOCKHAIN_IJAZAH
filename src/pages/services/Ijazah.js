import axios from "axios";
export const getIjazah  = ()=> {
    return new Promise((resolve, reject) => {
        axios
            .get(process.env.VUE_APP_ENDPOINT_API+`/getIjazah`)
            .then(response => {
                resolve(response.data);
            })
            .catch(errors => {
                reject(errors.response.data);
            });
    }); 
}
export const getFile  = (hash)=> {
    let formData = new FormData();
    formData.append("arg",hash)
    return new Promise((resolve, reject) => {
        axios
            .post(process.env.VUE_APP_ENDPOINT_IPFS+`/cat`,formData)
            .then(response => {
                resolve(response.data);
            })
            .catch(errors => {
                reject(errors.response.data);
            });
    }); 
}

export const sendIjazah  = (data)=> {
    console.log(process.env.VUE_APP_ENDPOINT_API);
    let formData = new FormData();
    formData.append("nomor",data.nomor)
    formData.append("logo", data.logo,data.logo.name);
    formData.append("pas",data.pas,data.pas.name);
    formData.append("lembaga",data.lembaga);
    formData.append("nama",data.nama);
    formData.append("ttl",data.ttl);
    formData.append("nim",data.nim);
    formData.append("jenjang",data.jenjang);
    formData.append("prodi",data.prodi);
    formData.append("tglLulus",data.tglLulus);
    formData.append("rektor",data.rektor);
    formData.append("nipRektor",data.nipRektor);
    formData.append("dekan",data.dekan);
    formData.append("nipDekan",data.nipDekan);
    formData.append("email",data.email);
    console.log(formData);
    
    return new Promise((resolve, reject) => {
        axios
            .post(process.env.VUE_APP_ENDPOINT_API+`/sertifikat`,formData,{
                headers: {
                    "content-type": "multipart/form-data",
                },
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(errors => {
                reject(errors.response.data);
            });
    }); 
}