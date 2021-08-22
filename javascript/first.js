
let user=[
   {userid:2018000000010,username:"Bishaji",Passwrd:113},
   {userid:2018000000012,username:"Rnr",Passwrd:114},
   {userid:2018000000024,username:"Kusk",Passwrd:115}
]

const s=document.getElementById("ap1")
s.innerHTML=`${user.map(v=>{
   return (` <tr>
   <th>${v.userid}</th>
   <th>${v.username}</th>
   <th>${v.Passwrd}</th>
 </tr>`)

})}`


