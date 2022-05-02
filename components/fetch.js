let getnews=async(url)=>{
try{
    let res= await fetch(url);
    let data=await res.json();
    return data;
}catch(err)
{
    console.log(err);
}
}

let appendnews=(data)=>
{
    data.forEach(({urlToImage,title,description})=>{
        let div=document.createElement("div");
        div.class="news";
        let d1=document.createElement("div");
        let img=document.createElement("img");
        img.src=urlToImage;
        let title1=document.createElement("h3");
        title1.innerText=title;
        let desc=document.createElement("p");
        desc.innerText=description;
        class news{
            constructor(i,t,d)
            {
                this.iurlToImage=i;
                this.title=t;
                this.description=d;
            }
        }

      let x= new news(urlToImage,title,description);

        div.addEventListener("click",()=>{
            toNews(x);
        })
        d1.append(title1,desc);
        div.append(img,d1);
        document.getElementById("results").append(div);
    })
}

let arr=[]
let toNews=(x)=>{
    arr.push(x);
    localStorage.setItem("data",JSON.stringify(arr));
    window.location.href="news.html";
}






export{getnews,appendnews};
