(function(){      
    // Initialize a Set with array
    const nameList = ['Joe', 'Carol', 'Jenny', 'Cathy'];
    const nameSet = new Set(nameList);
    console.log(nameSet);  // Set(4) {'Joe', 'Carol', 'Jenny', 'Cathy'}

    // Initialize a Set with string
    const strSet = new Set('Cool');
    console.log(strSet); // Set(3) {'C', 'o', 'l'}
})();


(function(){    
    // Convert a Set to Array
    const nameList = ['Joe', 'Carol', 'Jenny', 'Cathy'];
    const nameSet = new Set(nameList);
    console.log(nameSet);  // Set(4) {'Joe', 'Carol', 'Jenny', 'Cathy'}

    const arrFromSet = Array.from(nameSet);
    console.log(arrFromSet); // (4) ['Joe', 'Carol', 'Jenny', 'Cathy']

    const spreadArr = [...nameSet];
    console.log(spreadArr); // (4) ['Joe', 'Carol', 'Jenny', 'Cathy']

    const arr = [];
    nameSet.forEach(v => arr.push(v));
    console.log(arr);  //(4) ['Joe', 'Carol', 'Jenny', 'Cathy']
})();



(function(){    
    // How to use loop on Set
    const nameList = ['Joe', 'Carol', 'Jenny', 'Cathy'];
    const nameSet = new Set(nameList);
    
    for(const value of nameSet.values()) {
        console.log(value);
    }

    for(const key of nameSet.keys()) {
        console.log(key);
    }

    for(const [key, value] of nameSet.entries()) {
        console.log(key, value);
    }

    nameSet.forEach((value, key) => {
        console.log(`${key} = ${value}`);
    });
})();


(function(){      
    // Initialize a Set with array
    const idList = ['d', 'a', 'b', 'c'];
    const idSet = new Set(idList);
    console.log(idSet); 

    // Sort Set using Array.from ascending
    const sortedSetAsc1 = Array.from(idSet).sort();
    console.log(sortedSetAsc1); 

    const sortedSetDec1 = Array.from(idSet).sort().reverse();
    console.log(sortedSetDec1); 

    // Sort Set using spread ascending
    const sortedSetAsc2 = [...idSet].sort();
    console.log(sortedSetAsc2);  
    
    const sortedSetDec2 = [...idSet].sort().reverse();
    console.log(sortedSetDec2);   
})();