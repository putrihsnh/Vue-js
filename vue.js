let vm = new Vue({
    el: '#app',
    data: {
            title : "data API Mahasiswa",
            description : " Data Api ada di vercel ",
            dataMahasiswa: null
        },
        mounted () {
          axios
            .get('https://if3b.zarazzar.vercel.app/ternak')
            .then(response => {console.log(response);
                this.dataMahasiswa = response.data
      })
    }
})