// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();
import{getnews,appendnews} from "../components/fetch.js"

// https://masai-mock-api.herokuapp.com/news/top-headlines?country=in
// https://masai-mock-api.herokuapp.com/news?q={query}
let a=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;
getnews(a).then((data)=>{
    console.log(data.articles);
    appendnews(data.articles);
})
let searchnews=(e)=>{
    document.getElementById("results").innerHTML=null;
    if(e.key=="Enter")
    {
        let query=document.getElementById("search_input").value;
        localStorage.setItem("news",query);
        window.location.href="search.html";
    }
}
document.getElementById("search_input").addEventListener("keydown",searchnews);


let sidebar=document.getElementById("sidebar").children;
console.log(sidebar);
for(let ele of sidebar)
{
    console.log(ele.id);
    ele.addEventListener("click",sidebar1);
}

function sidebar1(){
    console.log(this.id);
    document.getElementById("results").innerHTML=null;
    let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`
    getnews(url).then((data)=>{
        console.log(data.articles);
        appendnews(data.articles);
    })
   }








