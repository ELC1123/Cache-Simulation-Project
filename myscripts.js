const cache = new Array(8);
cache[0] = new Array();
cache[1] = new Array();
cache[2] = new Array();
cache[3] = new Array();
cache[4] = new Array();
cache[5] = new Array();
cache[6] = new Array();
cache[7] = new Array();
const memory = new Array();
memory.push(new Object({block:0,value:2}));
memory.push(new Object({block:0,value:3}));
memory.push(new Object({block:0,value:2}));
memory.push(new Object({block:0,value:3}));
memory.push(new Object({block:0,value:2}));
memory.push(new Object({block:0,value:3}));
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
        curr.age = 0
        set = curr.block%8;
        
        index = cache[set].findIndex(e => e.value === curr.value);
        if (index != -1){
            cache[set][index].age = 0;
        }else{
            if(cache[set].length<=4){
                cache[set].forEach(e => {
                    e.age++;
                });
                cache[set].push(curr);
            }else{
                tempage = cache[set][0].age;
                cache[set].forEach(e,i => {
                    if(e.age<tempage){
                        tempage = e.age;
                        index = i;
                    }
                });
            }
        }
        // cache.forEach(e => {
        //     e.forEach(block => {
        //         console.log(block.age);
        //     });
        // });
        console.log(JSON.stringify(cache));
    }
}