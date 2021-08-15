<template>
    <div class="utama">
        <h1>Registrasi Surat Keterangan Lulus</h1>
        <h4>Halo {{nama}}</h4>
        <form v-on:submit.prevent="submitForm">
            <input type="text" v-model="nama" placeholder="Nama Lengkap" required>
            <input type="text" v-model="nim" placeholder="Nomor Induk Mahasiswa" required>
            <input type="text" v-model="keperluan" placeholder="Keperluan" required>
            <input type="email" v-model="email" placeholder="Email *" required>
            <button type="submit">Oke</button>
        </form>
    </div>
</template>

<script>
import swal from 'sweetalert';
export default{
    name: "form-registrasi-skl-mahasiswa",
    data()  {
        return {
            nama : "",
            nim : "",
            keperluan : "",
            email : ""
        }
    },
    methods : {
        submitForm(){
            const text = "SKL anda sedang diproses dan akan dikirimkan dalam 3x24 jam";
            swal({
                title : text,
                icon: "success",
            });
            // this.resetForm();
        },
        resetForm(){
            this.nama = "";
            this.nim = "";
            this.keperluan = "";
            this.email = "";
        }
    }
}
</script>