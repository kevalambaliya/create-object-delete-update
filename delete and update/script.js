let myitem=Array();

function additem(){
    let val=document.getElementById('inp-item').value;

    myitem.push(val);
    console.log(myitem);
    let table=document.getElementById('table');
    let tr=document.createElement('tr');
    let td=document.createElement('td');

    td.id="td" + val;
    td.innerHTML=val;
    tr.append(td);
    table.append(tr);
    tr.id = val;

    tr.style.textAlign="center";
    tr.style.backgroundColor="white";
    table.style.backgroundColor="white";
    table.style.textAlign="center";
    table.style.width="100px";

}

function removeitem(){
    let val = document.getElementById('remove-item').value;
    let row = document.getElementById(val);
    row.remove();
}

function updateitem(){
    let oldval = document.getElementById('old-item').value;
    let newval = document.getElementById('new-item').value;

    let row = document.getElementById(oldval);
    row.id = newval;
    

    let td = document.getElementById("td" + oldval);

    td.innerHTML = newval;
    td.id = "td" + newval;

}

