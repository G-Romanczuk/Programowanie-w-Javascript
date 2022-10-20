function onLoad(){

    document.querySelectorAll('.form').forEach(x => {
        x.addEventListener('change', () => {calculate()}
        )});
}

function calculate() {
        var list = document.querySelectorAll(".form");
        var array = [];
        for(var i = 0; i< list.length; i++)
        {
            array[i] = parseInt(list[i].value)
        }
        //SUMA
        var sum = 0
        list.forEach(x=>sum+= parseInt(x.value));
        document.getElementById('sum').innerHTML = sum; 

        //ŚREDNIA
        var avg = 0
        var count = 0
        list.forEach(x=>count++);
        avg = sum/count;
        document.getElementById('avg').innerHTML = avg; 

        //MINIMUM
        var min = Math.min(...array)
        document.getElementById('min').innerHTML = min; 
        //MAKSIMUM
        var max = Math.max(...array)
        document.getElementById('max').innerHTML = max; 
}

var countArea = 3;

async function Add() {
 countArea++;
 var area = document.createElement("input");
                area.setAttribute("type", "number");
                area.setAttribute("id", countArea);
                area.setAttribute("value", "1");
                area.setAttribute("class", "form");
document.getElementById("formContainer").appendChild(area);  
onLoad();   
calculate();     
}
   
function Delete() {
document.getElementById( countArea ).remove()
countArea--;
onLoad();
calculate();
}
