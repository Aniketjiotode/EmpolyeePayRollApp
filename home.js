const header= `
            <tr>
            <th>profilepic</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Deparment</th>
            <th>Salary</th>
            <th>Actions</th>
            </tr>            
            `;

function loadpage(){
    
  var table =document.querySelector('#table');
  var list = localStorage.getItem('list');
  if(list !=null){
    var arr =JSON.parse(list);
    var contentrow=header;
    arr.forEach(emp => {
        contentrow +=`
        <tr id=${emp.name}>
        <td><img src=${emp.profilePic} style="width: 50px;"></td>
        <td>${emp.name}</td>
        <td>${emp.gender}</td>
        <td>${emp.department}</td>
        <td>${emp.salary}</td>
        <td>
        <img name="1" onclick="remove('${emp.name}')" src="images/delete.png">
        <img name="1" onclick="update('${emp.name}')" src="images/edit.png">
        </td>
        </tr>     
      `
    });
    table.innerHTML=contentrow
  }
}       
     function remove(id){
        var st=localStorage.getItem('list');
        var arr =JSON.parse(st);
        arr.forEach(e=>{
            if(e.name==id){
                var doc=document.getElementById(id);
                doc.style.display='none';
            }
        })
        arr.pop(x=>x.name==id);
        localStorage.setItem('list',JSON.stringify(arr))
     }
function update(id){
    localStorage.setItem('name',id)
    window.location.replace("http://127.0.0.1:5500/PayRollForm.html")
}
loadpage();