

let but=document.querySelector('.but')
let val="dance"
let requestURL='https://api.waifu.pics/sfw/dance'
let test=document.querySelector('.test')
/*test.addEventListener("click", ()=>{
  requestURL='https://api.waifu.pics/sfw/cringe'
  console.log(requestURL)
}) */

let value=0
//const requestURL=`https://api.waifu.pics/sfw/${value}`
let  image=document.querySelector('.image')
//const requestURL='https://jsonapi.org/format/#fetching-filtering'
function aaa(){
    function sendRequest(method, url){
    return new Promise((resolve, reject)=> {
        const xhr=new XMLHttpRequest()
        xhr.open(method, url) //Получаем данные с сервера 
        xhr.responseType='json'
      //  xhr.setRequestHeader('Content-Type', 'application/json')
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
function myFunc (frm)
{
  let mass=["cry", "dance", "lick", "happy" ]
  let position=0;
  requestURL='https://api.waifu.pics/sfw/'
for (var j = 0, lj = frm.ABC.length; j < lj; j++) if (frm.ABC [j].checked){
position=j;
//alert(mass[position])
  //frm.ABC [j].checked
 //break;
}
requestURL+=mass[position]
sendRequest("GET", requestURL)
//aaa()
//alert (frm.ABC [j].value);
//requestURL+=frm.ABC [j].value
//alert(requestURL)
/*.then((data) =>{ 
  console.log(data.url)
  console.log(requestURL)
  var a=document.createElement('a');
  a.href=data.url;
//  let sr = image.src
  image.src=data.url
}
  )
 
}
} */

.then((data) =>{ 
    console.log(data.url)
    console.log(requestURL)
    var a=document.createElement('a');
    a.href=data.url;
  //  let sr = image.src
    image.src=data.url
}
    )
   
} 
  but.addEventListener("click", aaa)



  let itemms = document.querySelectorAll('.item_list_li')
 

  let ooo= document.querySelector('.oo').innerText
  console.log(ooo)
}
//=====================================