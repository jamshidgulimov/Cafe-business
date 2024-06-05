const home = document.getElementById('home')
const rest = document.getElementById('rest')



alert('Salom')


let son = 123



if(son === +prompt('Parol')){

   alert('Ishingizga omad')
   home.classList.remove('hidden')
}else{
    alert('Parol noto`g`ri')
   rest.classList.remove('hidden')

}
