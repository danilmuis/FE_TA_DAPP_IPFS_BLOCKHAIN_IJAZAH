import axios from "axios";

export const sendTranskrip  = (data)=> {
    let formData = new FormData();
    for(var i=0;i<data.kode_matkul.length;i++){
        formData.append("kode_matkul",data.kode_matkul[i]);
        formData.append("matkul",data.matkul[i]);
        formData.append("semester",data.semester[i]);
        formData.append("sks",data.sks[i]);
        formData.append("nilai",data.nilai[i]);
    }

    formData.append("nomor",data.nomor);
    formData.append("nomorRektor",data.nomorRektor);
    formData.append("ttl",data.ttl);
    formData.append("logo", data.logo,data.logo.name);
    formData.append("pas",data.pas,data.pas.name);
    formData.append("lembaga",data.lembaga);
    formData.append("nama",data.nama);
    formData.append("nim",data.nim);
    formData.append("jenjang",data.jenjang);
    formData.append("prodi",data.prodi);
    formData.append("fakultas",data.fakultas);
    formData.append("ipk",data.ipk);
    formData.append("ta",data.ta);
    formData.append("gelar",data.gelar);
    formData.append("tglLulus",data.tglLulus);
    formData.append("rektor",data.rektor);
    formData.append("nipRektor",data.nipRektor);
    formData.append("dekan",data.dekan);
    formData.append("nipDekan",data.nipDekan);
    formData.append("email",data.email);
    
    
    
    return new Promise((resolve, reject) => {
        axios
            .post(process.env.VUE_APP_ENDPOINT_API+`/transkrip`,formData,{
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