const cache = new Array(8);
cache[0] = new Array();
cache[1] = new Array();
cache[2] = new Array();
cache[3] = new Array();
cache[4] = new Array();
cache[5] = new Array();
cache[6] = new Array();
cache[7] = new Array();
const age = [0,0,0,0,0,0,0,0];
misscount = 0;
hitcount = 0;
time = 0;
const memory = new Array();
// memory.push(new Object({block:0,value:2}));
// memory.push(new Object({block:1,value:2}));
// memory.push(new Object({block:2,value:2}));
// memory.push(new Object({block:3,value:2}));
// memory.push(new Object({block:4,value:2}));
// memory.push(new Object({block:5,value:2}));
// memory.push(new Object({block:6,value:2}));
// memory.push(new Object({block:7,value:2}));
// memory.push(new Object({block:8,value:2}));
// memory.push(new Object({block:9,value:2}));
// memory.push(new Object({block:10,value:2}));
// memory.push(new Object({block:11,value:2}));
// memory.push(new Object({block:12,value:2}));
// memory.push(new Object({block:13,value:2}));
// memory.push(new Object({block:14,value:2}));
// memory.push(new Object({block:15,value:2}));
// memory.push(new Object({block:16,value:2}));
// memory.push(new Object({block:17,value:2}));
// memory.push(new Object({block:18,value:2}));
// memory.push(new Object({block:19,value:2}));
// memory.push(new Object({block:20,value:2}));
// memory.push(new Object({block:21,value:2}));
// memory.push(new Object({block:22,value:2}));
// memory.push(new Object({block:23,value:2}));
// memory.push(new Object({block:24,value:2}));
// memory.push(new Object({block:25,value:2}));
// memory.push(new Object({block:26,value:2}));
// memory.push(new Object({block:27,value:2}));
// memory.push(new Object({block:28,value:2}));
// memory.push(new Object({block:29,value:2}));
// memory.push(new Object({block:30,value:2}));
// memory.push(new Object({block:31,value:2}));
// memory.push(new Object({block:32,value:2}));
// memory.push(new Object({block:33,value:2}));
// memory.push(new Object({block:34,value:2}));
// memory.push(new Object({block:35,value:2}));
// memory.push(new Object({block:36,value:2}));
// memory.push(new Object({block:37,value:2}));
// memory.push(new Object({block:38,value:2}));
// memory.push(new Object({block:39,value:2}));
// memory.push(new Object({block:40,value:2}));
// memory.push(new Object({block:41,value:2}));
// memory.push(new Object({block:42,value:2}));
// memory.push(new Object({block:43,value:2}));
// memory.push(new Object({block:44,value:2}));
// memory.push(new Object({block:45,value:2}));
// memory.push(new Object({block:46,value:2}));
// memory.push(new Object({block:47,value:2}));
// memory.push(new Object({block:48,value:2}));
// memory.push(new Object({block:49,value:2}));
// memory.push(new Object({block:50,value:2}));
// memory.push(new Object({block:51,value:2}));
// memory.push(new Object({block:52,value:2}));
// memory.push(new Object({block:53,value:2}));
// memory.push(new Object({block:54,value:2}));
// memory.push(new Object({block:55,value:2}));
// memory.push(new Object({block:56,value:2}));
// memory.push(new Object({block:57,value:2}));
// memory.push(new Object({block:58,value:2}));
// memory.push(new Object({block:59,value:2}));
// memory.push(new Object({block:60,value:2}));
// memory.push(new Object({block:61,value:2}));
// memory.push(new Object({block:62,value:2}));
// memory.push(new Object({block:63,value:2}));
// memory.push(new Object({block:0,value:2}));
// memory.push(new Object({block:1,value:2}));
// memory.push(new Object({block:2,value:2}));
// memory.push(new Object({block:3,value:2}));
// memory.push(new Object({block:4,value:2}));
// memory.push(new Object({block:5,value:2}));
// memory.push(new Object({block:6,value:2}));
// memory.push(new Object({block:7,value:2}));
// memory.push(new Object({block:8,value:2}));
// memory.push(new Object({block:9,value:2}));
// memory.push(new Object({block:10,value:2}));
// memory.push(new Object({block:11,value:2}));
// memory.push(new Object({block:12,value:2}));
// memory.push(new Object({block:13,value:2}));
// memory.push(new Object({block:14,value:2}));
// memory.push(new Object({block:15,value:2}));
// memory.push(new Object({block:16,value:2}));
// memory.push(new Object({block:17,value:2}));
// memory.push(new Object({block:18,value:2}));
// memory.push(new Object({block:19,value:2}));
// memory.push(new Object({block:20,value:2}));
// memory.push(new Object({block:21,value:2}));
// memory.push(new Object({block:22,value:2}));
// memory.push(new Object({block:23,value:2}));
// memory.push(new Object({block:24,value:2}));
// memory.push(new Object({block:25,value:2}));
// memory.push(new Object({block:26,value:2}));
// memory.push(new Object({block:27,value:2}));
// memory.push(new Object({block:28,value:2}));
// memory.push(new Object({block:29,value:2}));
// memory.push(new Object({block:30,value:2}));
// memory.push(new Object({block:31,value:2}));
// memory.push(new Object({block:32,value:2}));
// memory.push(new Object({block:33,value:2}));
// memory.push(new Object({block:34,value:2}));
// memory.push(new Object({block:35,value:2}));
// memory.push(new Object({block:36,value:2}));
// memory.push(new Object({block:37,value:2}));
// memory.push(new Object({block:38,value:2}));
// memory.push(new Object({block:39,value:2}));
// memory.push(new Object({block:40,value:2}));
// memory.push(new Object({block:41,value:2}));
// memory.push(new Object({block:42,value:2}));
// memory.push(new Object({block:43,value:2}));
// memory.push(new Object({block:44,value:2}));
// memory.push(new Object({block:45,value:2}));
// memory.push(new Object({block:46,value:2}));
// memory.push(new Object({block:47,value:2}));
// memory.push(new Object({block:48,value:2}));
// memory.push(new Object({block:49,value:2}));
// memory.push(new Object({block:50,value:2}));
// memory.push(new Object({block:51,value:2}));
// memory.push(new Object({block:52,value:2}));
// memory.push(new Object({block:53,value:2}));
// memory.push(new Object({block:54,value:2}));
// memory.push(new Object({block:55,value:2}));
// memory.push(new Object({block:56,value:2}));
// memory.push(new Object({block:57,value:2}));
// memory.push(new Object({block:58,value:2}));
// memory.push(new Object({block:59,value:2}));
// memory.push(new Object({block:60,value:2}));
// memory.push(new Object({block:61,value:2}));
// memory.push(new Object({block:62,value:2}));
// memory.push(new Object({block:63,value:2}));
// memory.push(new Object({block:0,value:2}));
// memory.push(new Object({block:1,value:2}));
// memory.push(new Object({block:2,value:2}));
// memory.push(new Object({block:3,value:2}));
// memory.push(new Object({block:4,value:2}));
// memory.push(new Object({block:5,value:2}));
// memory.push(new Object({block:6,value:2}));
// memory.push(new Object({block:7,value:2}));
// memory.push(new Object({block:8,value:2}));
// memory.push(new Object({block:9,value:2}));
// memory.push(new Object({block:10,value:2}));
// memory.push(new Object({block:11,value:2}));
// memory.push(new Object({block:12,value:2}));
// memory.push(new Object({block:13,value:2}));
// memory.push(new Object({block:14,value:2}));
// memory.push(new Object({block:15,value:2}));
// memory.push(new Object({block:16,value:2}));
// memory.push(new Object({block:17,value:2}));
// memory.push(new Object({block:18,value:2}));
// memory.push(new Object({block:19,value:2}));
// memory.push(new Object({block:20,value:2}));
// memory.push(new Object({block:21,value:2}));
// memory.push(new Object({block:22,value:2}));
// memory.push(new Object({block:23,value:2}));
// memory.push(new Object({block:24,value:2}));
// memory.push(new Object({block:25,value:2}));
// memory.push(new Object({block:26,value:2}));
// memory.push(new Object({block:27,value:2}));
// memory.push(new Object({block:28,value:2}));
// memory.push(new Object({block:29,value:2}));
// memory.push(new Object({block:30,value:2}));
// memory.push(new Object({block:31,value:2}));
// memory.push(new Object({block:32,value:2}));
// memory.push(new Object({block:33,value:2}));
// memory.push(new Object({block:34,value:2}));
// memory.push(new Object({block:35,value:2}));
// memory.push(new Object({block:36,value:2}));
// memory.push(new Object({block:37,value:2}));
// memory.push(new Object({block:38,value:2}));
// memory.push(new Object({block:39,value:2}));
// memory.push(new Object({block:40,value:2}));
// memory.push(new Object({block:41,value:2}));
// memory.push(new Object({block:42,value:2}));
// memory.push(new Object({block:43,value:2}));
// memory.push(new Object({block:44,value:2}));
// memory.push(new Object({block:45,value:2}));
// memory.push(new Object({block:46,value:2}));
// memory.push(new Object({block:47,value:2}));
// memory.push(new Object({block:48,value:2}));
// memory.push(new Object({block:49,value:2}));
// memory.push(new Object({block:50,value:2}));
// memory.push(new Object({block:51,value:2}));
// memory.push(new Object({block:52,value:2}));
// memory.push(new Object({block:53,value:2}));
// memory.push(new Object({block:54,value:2}));
// memory.push(new Object({block:55,value:2}));
// memory.push(new Object({block:56,value:2}));
// memory.push(new Object({block:57,value:2}));
// memory.push(new Object({block:58,value:2}));
// memory.push(new Object({block:59,value:2}));
// memory.push(new Object({block:60,value:2}));
// memory.push(new Object({block:61,value:2}));
// memory.push(new Object({block:62,value:2}));
// memory.push(new Object({block:63,value:2}));
// memory.push(new Object({block:0,value:2}));
// memory.push(new Object({block:1,value:2}));
// memory.push(new Object({block:2,value:2}));
// memory.push(new Object({block:3,value:2}));
// memory.push(new Object({block:4,value:2}));
// memory.push(new Object({block:5,value:2}));
// memory.push(new Object({block:6,value:2}));
// memory.push(new Object({block:7,value:2}));
// memory.push(new Object({block:8,value:2}));
// memory.push(new Object({block:9,value:2}));
// memory.push(new Object({block:10,value:2}));
// memory.push(new Object({block:11,value:2}));
// memory.push(new Object({block:12,value:2}));
// memory.push(new Object({block:13,value:2}));
// memory.push(new Object({block:14,value:2}));
// memory.push(new Object({block:15,value:2}));
// memory.push(new Object({block:16,value:2}));
// memory.push(new Object({block:17,value:2}));
// memory.push(new Object({block:18,value:2}));
// memory.push(new Object({block:19,value:2}));
// memory.push(new Object({block:20,value:2}));
// memory.push(new Object({block:21,value:2}));
// memory.push(new Object({block:22,value:2}));
// memory.push(new Object({block:23,value:2}));
// memory.push(new Object({block:24,value:2}));
// memory.push(new Object({block:25,value:2}));
// memory.push(new Object({block:26,value:2}));
// memory.push(new Object({block:27,value:2}));
// memory.push(new Object({block:28,value:2}));
// memory.push(new Object({block:29,value:2}));
// memory.push(new Object({block:30,value:2}));
// memory.push(new Object({block:31,value:2}));
// memory.push(new Object({block:32,value:2}));
// memory.push(new Object({block:33,value:2}));
// memory.push(new Object({block:34,value:2}));
// memory.push(new Object({block:35,value:2}));
// memory.push(new Object({block:36,value:2}));
// memory.push(new Object({block:37,value:2}));
// memory.push(new Object({block:38,value:2}));
// memory.push(new Object({block:39,value:2}));
// memory.push(new Object({block:40,value:2}));
// memory.push(new Object({block:41,value:2}));
// memory.push(new Object({block:42,value:2}));
// memory.push(new Object({block:43,value:2}));
// memory.push(new Object({block:44,value:2}));
// memory.push(new Object({block:45,value:2}));
// memory.push(new Object({block:46,value:2}));
// memory.push(new Object({block:47,value:2}));
// memory.push(new Object({block:48,value:2}));
// memory.push(new Object({block:49,value:2}));
// memory.push(new Object({block:50,value:2}));
// memory.push(new Object({block:51,value:2}));
// memory.push(new Object({block:52,value:2}));
// memory.push(new Object({block:53,value:2}));
// memory.push(new Object({block:54,value:2}));
// memory.push(new Object({block:55,value:2}));
// memory.push(new Object({block:56,value:2}));
// memory.push(new Object({block:57,value:2}));
// memory.push(new Object({block:58,value:2}));
// memory.push(new Object({block:59,value:2}));
// memory.push(new Object({block:60,value:2}));
// memory.push(new Object({block:61,value:2}));
// memory.push(new Object({block:62,value:2}));
// memory.push(new Object({block:63,value:2}));

function init(){
    const cache = new Array(8);
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
}

async function start(){
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
                //console.log(document.getElementById("cache").children[0].children[set*2+1].children[cache[set].length]);
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
                        "<p> Average Memory Access Time: "+1+"</p>"+
                        "<p> Total Memory Access Time: "+1+"</p>"+
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