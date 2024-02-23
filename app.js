let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");

btn.addEventListener("click",function(){
   let item=document.createElement("li");
   item.innerText=input.value;

   let delBtn=document.createElement("button");
   delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.append(delBtn);

   ul.append(item);
    input.value="";
})

ul.addEventListener("click",function(event){
    let listItem=event.target.parentElement;
    listItem.remove();
})

// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// }
