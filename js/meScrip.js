// Lenjuaje del sitio
const linkLenguajeEspañol = document.getElementById("item__link--español");
const linkLenguajeEnglish = document.getElementById("item__link--english");

linkLenguajeEspañol.addEventListener('click', (e)=> {
    console.log(e.target.parentElement)
});

linkLenguajeEnglish.addEventListener('click', (e)=> {
    console.log(e.target.parentElement)
})
