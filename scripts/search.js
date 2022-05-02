// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import{getnews,appendnews} from "../components/fetch.js"

let a=localStorage.getItem("news");
let b=`https://masai-mock-api.herokuapp.com/news?q=${a}`
getnews(b).then((data)=>{
    console.log(data.articles);
    appendnews(data.articles);
})

let searchnews=(e)=>{
    document.getElementById("results").innerHTML=null;
    if(e.key=="Enter")
    {
        let query=document.getElementById("search_input").value;
        let url=`https://masai-mock-api.herokuapp.com/news?q=${query}`
        getnews(url).then((data)=>{
            console.log(data.articles);
            appendnews(data.articles);
        })


    }
}
document.getElementById("search_input").addEventListener("keydown",searchnews);