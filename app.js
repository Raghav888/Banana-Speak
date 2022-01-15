const btnTranslate = document.querySelector("#btn-tran")
const data = document.querySelector("#inputdata")
const out = document.querySelector("#output")
const img_out = document.querySelector("#img")
const url = "https://api.funtranslations.com/translate/minion.json?text="

const errorHandler=(error)=>console.log(error);


//milliseconds until timeout//
const hideElement=()=> {
    document.getElementById("img_o").src = ""
}

const messgae=()=> {
    url = url + data.value
    let data_out = fetch(url).then(response => response.json()).
    then(json => { out.innerText = json.contents.translated }).catch(errorHandler)

    document.getElementById("img_o").src = "thumbsup.gif"
    setTimeout(hideElement, 3000)
}
btnTranslate.addEventListener("click", messgae, false)
