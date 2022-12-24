
let but=document.querySelector('.but')
let val="dance"
let requestURL='https://api.waifu.pics/sfw/dance'
let test=document.querySelector('.test')
let value=0

let  image=document.querySelector('.image')

const _apiBase='https://api.waifu.pics/sfw';

const fetchDancing = async () => {
    const res = await fetch(`${_apiBase}/dance`);
    await res.json();
    return res.url;
}

function aaa(urll){
   console.log(urll)
    function sendRequest(method, url){
    return new Promise((resolve, reject)=> {
        const xhr=new XMLHttpRequest()
        xhr.open(method, url) //Получаем данные с сервера 
        xhr.responseType='json'
     
        xhr.onload =() => {
            if(xhr.status>=400){
                reject(xhr.response)
            }
            else {
                resolve(xhr.response) //выводим в консоль данные с сервера в виде стрингов
            }
           
        }
        xhr.onerror=()=> {
            reject("Error")
        }
   
        xhr.send(xhr.response)
     
    })
   

}
sendRequest("GET", requestURL)
.then(data => {
    console.log(data)
    var a=document.createElement('a');
    a.href=data.url;
  //  let sr = image.src
    image.src=data.url
})
}


document.querySelector('.first').addEventListener('click', ()=>{
    requestURL='https://api.waifu.pics/sfw/'
    requestURL+="cry"
})
document.querySelector('.sec').addEventListener('click', ()=>{
    requestURL='https://api.waifu.pics/sfw/'
    requestURL+="dance"
})
document.querySelector('.third').addEventListener('click', ()=>{
    requestURL='https://api.waifu.pics/sfw/'
    requestURL+="lick"
})
document.querySelector('.fourth').addEventListener('click', ()=>{
    requestURL='https://api.waifu.pics/sfw/'
    requestURL+="happy"
})

but.addEventListener("click", aaa)

 
//=====================================