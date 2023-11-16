cache = new Array(8);
cache[0] = new Array();
cache[1] = new Array();
cache[2] = new Array();
cache[3] = new Array();
cache[4] = new Array();
cache[5] = new Array();
cache[6] = new Array();
cache[7] = new Array();
age = [0,0,0,0,0,0,0,0];
misscount = 0;
hitcount = 0;
time = 0;
memory = new Array();
cachebase;

function init(){
    cache = new Array(8);
    cache[0] = new Array();
    cache[1] = new Array();
    cache[2] = new Array();
    cache[3] = new Array();
    cache[4] = new Array();
    cache[5] = new Array();
    cache[6] = new Array();
    cache[7] = new Array();
    age = [0,0,0,0,0,0,0,0];
    misscount = 0;
    hitcount = 0;
    time = 0;
    memory = new Array();

}

function reset(){
    init();
    document.getElementById("input").style.display = "block";
    document.getElementById("memory-sequence").style.display = "none";
    parent = document.getElementById("input").children[0];
    parent.innerHTML = "<tr>"+
                        "<th> Block </th>"+
                        "</tr>"+
                        "<tr>"+
                        "<td> <input type='number' onkeydown='addtomemory(this)'> </td>"+
                        "</tr>";
    textlog = document.getElementById("memory-sequence").children[0];
    textlog.innerHTML = "<tr>"+
                            "<th> Sequence </th> <th> Status </th> <th> Set </th> <th> Time </th>"+
                        "</tr>";
    document.getElementById("cache").innerHTML = cachebase;
    finalsnap = document.getElementById("final-snapshot");
    finalsnap.style.display = "none";
    finalsnap.innerHTML= "";
    document.getElementById("start").disabled = false;
    document.getElementById("time").innerHTML = time;
}

async function start(){
    document.getElementById("start").disabled = true;
    cachebase = document.getElementById("cache").innerHTML;
    textlog = document.getElementById("memory-sequence").children[0];
    document.getElementById("input").style.display = "none";
    document.getElementById("memory-sequence").style.display = "block";
    while(memory.length !=0){
        delay = document.getElementById("speed").value;
        curr = memory.shift();
        set = curr.block%8;
        curr.age = age[set];
        age[set]++;
        
        index = cache[set].findIndex(e => e.block === curr.block);
        time++;
        document.getElementById("time").innerHTML = time;
        if (index != -1){
            cache[set][index].age = curr.age;
            document.getElementById("cache").children[0].children[set*2+2].children[index+1].innerHTML = curr.age;
            stat = document.createElement("td")
            stat.classList.add("green");
            hitcount++;
        }else{
            if(cache[set].length<4){
                cache[set].push(curr);
                document.getElementById("cache").children[0].children[set*2+1].children[cache[set].length].innerHTML = curr.block;
                document.getElementById("cache").children[0].children[set*2+2].children[cache[set].length].innerHTML = curr.age;
            }else{
                tempage = 0;
                cache[set].forEach((e,i) => {
                    if(e.age>tempage){
                        tempage = e.age;
                        index = i;
                    }
                });
                cache[set][index] = curr; 
                document.getElementById("cache").children[0].children[set*2+1].children[index+1].innerHTML = curr.block;
                document.getElementById("cache").children[0].children[set*2+2].children[index+1].innerHTML = curr.age;
            }
            stat = document.createElement("td");
            stat.classList.add("red");
            misscount++;
            time = time + 640;
            document.getElementById("time").innerHTML = time;
        }
        row = document.createElement("tr");
        number = document.createElement("td");
        setdisplay = document.createElement("td");
        timedisplay = document.createElement("td");
        number.innerHTML = curr.block;
        setdisplay.innerHTML = set;
        timedisplay.innerHTML = time;
        row.appendChild(number);
        row.appendChild(stat);
        row.appendChild(setdisplay);
        row.appendChild(timedisplay);
        textlog.appendChild(row);
        await sleep(delay); 
        console.log(JSON.stringify(cache));
    }
    finalsnap = document.getElementById("final-snapshot");
    finalsnap.style.display = "block";
    finalsnap.innerHTML="<p> Final Snapshot </p>"+
                        "<p> Access Count: "+(hitcount+misscount)+" </p>"+
                        "<p> Hits: "+hitcount+"</p>"+
                        "<p> Misses: "+misscount+"</p>"+
                        "<p> Average Memory Access Time: "+(325*misscount+misscount+hitcount)+"</p>"+
                        "<p> Total Memory Access Time: "+time+"</p>"+
                        "<p> Hit Rate: "+(hitcount/(hitcount+misscount))+"</p>"+
                        "<p> Miss Rate: "+(misscount/(hitcount+misscount))+"</p>";
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function addtomemory(e){
    if(event.keyCode == 13){
        value = e.value;
        if(value != ""){
            memory.push(new Object({block:value}));
            row = document.createElement("tr");
            col = document.createElement("td");
            col.innerHTML = "<input type='number' onkeydown='addtomemory(this)'>"
            row.appendChild(col);
            parent = e.parentNode;
            parent.innerHTML = e.value;
            parent.parentNode.parentNode.appendChild(row);
            col.children[0].focus();
            console.log("enter");
        }
    }
    console.log("hi");
    console.log(JSON.stringify(memory));
}