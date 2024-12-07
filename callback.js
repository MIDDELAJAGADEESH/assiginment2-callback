const click=document.querySelector(".click");
const main=document.querySelector(".main");


function dealy(callback){
    setTimeout(()=>{
        callback();
    },5000)
}

function fetchdata(){
    return fetch("https://dummyjson.com/posts").then(response=>response.json())
    .then(data=>data.posts.map(post=>post.title))
    .catch(error=>{
        console.log(error);
        return console.log("field to fetch");
     })
}
click.addEventListener('click',function(){
    const newsection=document.createElement("section");
    const bmsg=document.createElement("p");
    bmsg.className="bmsg"
    newsection.className="dissection";
    

    newsection.appendChild(bmsg);
    main.appendChild(newsection);
    bmsg.innerHTML="Please wait wait 5 sec";
    const dis=document.createElement("ul");
    bmsg.appendChild(dis);

    dealy(function(){
        fetchdata().then(posttitles=>{
            let change=document.createElement("section");
            change.className="display";
            posttitles.forEach(element => {
                let li=document.createElement("li");
                li.innerHTML=element;
                change.appendChild(li);
                
            });
            bmsg.replaceWith(change);
        });
    });
   
});

