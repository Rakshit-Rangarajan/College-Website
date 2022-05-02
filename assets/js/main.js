showData();
function saveData()
{
let name,email,psw,subject,comments;
name=document.getElementById("name").value;
email=document.getElementById("email").value;
psw=document.getElementById("psw").value;
subject=document.getElementById("subject").value;
comments=document.getElementById("comments").value;

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
}
else
{
  user_records.push({
  "name":name,
  "email":email,
  "psw":psw,
  "subject":subject,
  "comments":comments
})
localStorage.setItem("users",JSON.stringify(user_records));
}
showData();
}

//Theme-change
var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dt");
    if(document.body.classList.contains("dt")){
        icon.src = "assets/img/sun.png"
    }
    else{
        icon.src = "assets/img/moon.png"
    }
}