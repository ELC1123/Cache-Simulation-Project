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
cachebase = "";

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
function loaded(){
    cachebase = document.getElementById("cache").innerHTML;
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
    document.getElementById("cache").children[0].innerHTML = cachebase;
    finalsnap = document.getElementById("final-snapshot");
    finalsnap.style.display = "none";
    finalsnap.innerHTML= "";
    document.getElementById("start").disabled = false;
    document.getElementById("time").innerHTML = time;
}

async function start(){
    document.getElementById("start").disabled = true;
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

function testone() {
    reset();
    memory=[{block:0},{block:1},{block:2},{block:3},{block:4},{block:5},{block:6},{block:7},{block:8},{block:9},{block:10},{block:11},{block:12},{block:13},{block:14},{block:15},{block:16},{block:17},{block:18},{block:19},{block:20},{block:21},{block:22},{block:23},{block:24},{block:25},{block:26},{block:27},{block:28},{block:29},{block:30},{block:31},{block:32},{block:33},{block:34},{block:35},{block:36},{block:37},{block:38},{block:39},{block:40},{block:41},{block:42},{block:43},{block:44},{block:45},{block:46},{block:47},{block:48},{block:49},{block:50},{block:51},{block:52},{block:53},{block:54},{block:55},{block:56},{block:57},{block:58},{block:59},{block:60},{block:61},{block:62},{block:63},{block:0},{block:1},{block:2},{block:3},{block:4},{block:5},{block:6},{block:7},{block:8},{block:9},{block:10},{block:11},{block:12},{block:13},{block:14},{block:15},{block:16},{block:17},{block:18},{block:19},{block:20},{block:21},{block:22},{block:23},{block:24},{block:25},{block:26},{block:27},{block:28},{block:29},{block:30},{block:31},{block:32},{block:33},{block:34},{block:35},{block:36},{block:37},{block:38},{block:39},{block:40},{block:41},{block:42},{block:43},{block:44},{block:45},{block:46},{block:47},{block:48},{block:49},{block:50},{block:51},{block:52},{block:53},{block:54},{block:55},{block:56},{block:57},{block:58},{block:59},{block:60},{block:61},{block:62},{block:63},{block:0},{block:1},{block:2},{block:3},{block:4},{block:5},{block:6},{block:7},{block:8},{block:9},{block:10},{block:11},{block:12},{block:13},{block:14},{block:15},{block:16},{block:17},{block:18},{block:19},{block:20},{block:21},{block:22},{block:23},{block:24},{block:25},{block:26},{block:27},{block:28},{block:29},{block:30},{block:31},{block:32},{block:33},{block:34},{block:35},{block:36},{block:37},{block:38},{block:39},{block:40},{block:41},{block:42},{block:43},{block:44},{block:45},{block:46},{block:47},{block:48},{block:49},{block:50},{block:51},{block:52},{block:53},{block:54},{block:55},{block:56},{block:57},{block:58},{block:59},{block:60},{block:61},{block:62},{block:63},{block:0},{block:1},{block:2},{block:3},{block:4},{block:5},{block:6},{block:7},{block:8},{block:9},{block:10},{block:11},{block:12},{block:13},{block:14},{block:15},{block:16},{block:17},{block:18},{block:19},{block:20},{block:21},{block:22},{block:23},{block:24},{block:25},{block:26},{block:27},{block:28},{block:29},{block:30},{block:31},{block:32},{block:33},{block:34},{block:35},{block:36},{block:37},{block:38},{block:39},{block:40},{block:41},{block:42},{block:43},{block:44},{block:45},{block:46},{block:47},{block:48},{block:49},{block:50},{block:51},{block:52},{block:53},{block:54},{block:55},{block:56},{block:57},{block:58},{block:59},{block:60},{block:61},{block:62},{block:63}]
    start();
}

function testtwo(){
    reset();
    memory = [{block:0},{block:1},{block:2},{block:3},{block:4},{block:5},{block:6},{block:7},{block:8},{block:9},{block:10},{block:11},{block:12},{block:13},{block:14},{block:15},{block:16},{block:17},{block:18},{block:19},{block:20},{block:21},{block:22},{block:23},{block:24},{block:25},{block:26},{block:27},{block:28},{block:29},{block:30},{block:31},{block:32},{block:33},{block:34},{block:35},{block:36},{block:37},{block:38},{block:39},{block:40},{block:41},{block:42},{block:43},{block:44},{block:45},{block:46},{block:47},{block:48},{block:49},{block:50},{block:51},{block:52},{block:53},{block:54},{block:55},{block:56},{block:57},{block:58},{block:59},{block:60},{block:61},{block:62},{block:63},{block:64},{block:65},{block:66},{block:67},{block:68},{block:69},{block:70},{block:71},{block:72},{block:73},{block:74},{block:75},{block:76},{block:77},{block:78},{block:79},{block:80},{block:81},{block:82},{block:83},{block:84},{block:85},{block:86},{block:87},{block:88},{block:89},{block:90},{block:91},{block:92},{block:93},{block:94},{block:95},{block:96},{block:97},{block:98},{block:99},{block:100},{block:101},{block:102},{block:103},{block:104},{block:105},{block:106},{block:107},{block:108},{block:109},{block:110},{block:111},{block:112},{block:113},{block:114},{block:115},{block:116},{block:117},{block:118},{block:119},{block:120},{block:121},{block:122},{block:123},{block:124},{block:125},{block:126},{block:127}];
    memory = memory.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);
    start();
}

function testthree(){
    reset();
    memory=[{block:0},{block:1},{block:2},{block:3},{block:4},{block:5},{block:6},{block:7},{block:8},{block:9},{block:10},{block:11},{block:12},{block:13},{block:14},{block:15},{block:16},{block:17},{block:18},{block:19},{block:20},{block:21},{block:22},{block:23},{block:24},{block:25},{block:26},{block:27},{block:28},{block:29},{block:30},{block:1},{block:2},{block:3},{block:4},{block:5},{block:6},{block:7},{block:8},{block:9},{block:10},{block:11},{block:12},{block:13},{block:14},{block:15},{block:16},{block:17},{block:18},{block:19},{block:20},{block:21},{block:22},{block:23},{block:24},{block:25},{block:26},{block:27},{block:28},{block:29},{block:30},{block:31},{block:32},{block:33},{block:34},{block:35},{block:36},{block:37},{block:38},{block:39},{block:40},{block:41},{block:42},{block:43},{block:44},{block:45},{block:46},{block:47},{block:48},{block:49},{block:50},{block:51},{block:52},{block:53},{block:54},{block:55},{block:56},{block:57},{block:58},{block:59},{block:60},{block:61},{block:62},{block:63},{block:0},{block:1},{block:2},{block:3},{block:4},{block:5},{block:6},{block:7},{block:8},{block:9},{block:10},{block:11},{block:12},{block:13},{block:14},{block:15},{block:16},{block:17},{block:18},{block:19},{block:20},{block:21},{block:22},{block:23},{block:24},{block:25},{block:26},{block:27},{block:28},{block:29},{block:30},{block:1},{block:2},{block:3},{block:4},{block:5},{block:6},{block:7},{block:8},{block:9},{block:10},{block:11},{block:12},{block:13},{block:14},{block:15},{block:16},{block:17},{block:18},{block:19},{block:20},{block:21},{block:22},{block:23},{block:24},{block:25},{block:26},{block:27},{block:28},{block:29},{block:30},{block:31},{block:32},{block:33},{block:34},{block:35},{block:36},{block:37},{block:38},{block:39},{block:40},{block:41},{block:42},{block:43},{block:44},{block:45},{block:46},{block:47},{block:48},{block:49},{block:50},{block:51},{block:52},{block:53},{block:54},{block:55},{block:56},{block:57},{block:58},{block:59},{block:60},{block:61},{block:62},{block:63},{block:0},{block:1},{block:2},{block:3},{block:4},{block:5},{block:6},{block:7},{block:8},{block:9},{block:10},{block:11},{block:12},{block:13},{block:14},{block:15},{block:16},{block:17},{block:18},{block:19},{block:20},{block:21},{block:22},{block:23},{block:24},{block:25},{block:26},{block:27},{block:28},{block:29},{block:30},{block:1},{block:2},{block:3},{block:4},{block:5},{block:6},{block:7},{block:8},{block:9},{block:10},{block:11},{block:12},{block:13},{block:14},{block:15},{block:16},{block:17},{block:18},{block:19},{block:20},{block:21},{block:22},{block:23},{block:24},{block:25},{block:26},{block:27},{block:28},{block:29},{block:30},{block:31},{block:32},{block:33},{block:34},{block:35},{block:36},{block:37},{block:38},{block:39},{block:40},{block:41},{block:42},{block:43},{block:44},{block:45},{block:46},{block:47},{block:48},{block:49},{block:50},{block:51},{block:52},{block:53},{block:54},{block:55},{block:56},{block:57},{block:58},{block:59},{block:60},{block:61},{block:62},{block:63},{block:0},{block:1},{block:2},{block:3},{block:4},{block:5},{block:6},{block:7},{block:8},{block:9},{block:10},{block:11},{block:12},{block:13},{block:14},{block:15},{block:16},{block:17},{block:18},{block:19},{block:20},{block:21},{block:22},{block:23},{block:24},{block:25},{block:26},{block:27},{block:28},{block:29},{block:30},{block:1},{block:2},{block:3},{block:4},{block:5},{block:6},{block:7},{block:8},{block:9},{block:10},{block:11},{block:12},{block:13},{block:14},{block:15},{block:16},{block:17},{block:18},{block:19},{block:20},{block:21},{block:22},{block:23},{block:24},{block:25},{block:26},{block:27},{block:28},{block:29},{block:30},{block:31},{block:32},{block:33},{block:34},{block:35},{block:36},{block:37},{block:38},{block:39},{block:40},{block:41},{block:42},{block:43},{block:44},{block:45},{block:46},{block:47},{block:48},{block:49},{block:50},{block:51},{block:52},{block:53},{block:54},{block:55},{block:56},{block:57},{block:58},{block:59},{block:60},{block:61},{block:62},{block:63}];
    start();
}
