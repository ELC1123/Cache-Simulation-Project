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
const memory = new Array();
memory.push(new Object({block:0,value:2}));
memory.push(new Object({block:8,value:3}));
memory.push(new Object({block:16,value:2}));
memory.push(new Object({block:24,value:3}));
memory.push(new Object({block:32,value:2}));
memory.push(new Object({block:40,value:3}));
memory.push(new Object({block:0,value:2}));
memory.push(new Object({block:0,value:3}));
memory.push(new Object({block:8,value:2}));
memory.push(new Object({block:9,value:3}));
memory.push(new Object({block:10,value:2}));
memory.push(new Object({block:11,value:3}));
memory.push(new Object({block:12,value:2}));
memory.push(new Object({block:13,value:3}));


function start(){
    while(memory.length !=0){
        curr = memory.shift();
        set = curr.block%8;
        curr.age = age[set];
        age[set]++;
        
        index = cache[set].findIndex(e => e.block === curr.block);
        if (index != -1){
            cache[set][index].age = curr.age;
        }else{
            if(cache[set].length<4){
                cache[set].push(curr);
            }else{
                tempage = 0;
                cache[set].forEach((e,i) => {
                    if(e.age>tempage){
                        tempage = e.age;
                        index = i;
                    }
                });
                cache[set][index] = curr; 
            }
        }
        console.log(JSON.stringify(cache));
    }
}