// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();

import{getnews,appendnews} from "../components/fetch.js"

let a=JSON.parse(localStorage.getItem("data"));
console.log(a);
a.forEach(({urlToImage,title,description})=>{
    let div=document.createElement("div");
        div.setAttribute=("class","news");
        let d1=document.createElement("div");
        let img=document.createElement("img");
        img.src=urlToImage;
        let title1=document.createElement("h3");
        title1.innerText=title;
        let desc=document.createElement("p");
        desc.innerText=description;
        d1.append(title1,desc);
        div.append(img,d1);
        document.getElementById("results").append(div);
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