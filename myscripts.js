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
memory.push(new Object({block:8,value:3}));

function start(){
    while(memory.length !=0){
        curr = memory.shift;
        curr.age = 0
        set = curr.block%8;
        if(cache[set].length<=4){
            cache[set].forEach(e => {
                e.age++;
            });
            cache[set].push(curr);
        }else{
            index = cache[set].findindex(e => e.value === curr.value);
            if (index != -1){
                cache[set][index].age = 0;
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
        console.log(cache.toString());
    }
}