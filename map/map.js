(function(){
    // Initialize a Map with 2D array
    const arr = [
        ['name', 'Joe Smith'],
        ['status', 'active'],
    ]
    const mapByArr = new Map(arr);
    console.log(mapByArr); // Map(2) {'name' => 'Joe Smith', 'status' => 'active'}

    // Initialize a Map from an literal object
    const obj = {name: 'Joe Smith', status: 'active'};
    const mapByObj = new Map(Object.entries(obj));
    console.log(mapByObj) // Map(2) {'name' => 'Joe Smith', 'status' => 'active'}

    // Initialize a Map manually
    const manualMap = new Map();
    manualMap.set('name', 'Joe Smith');
    manualMap.set('status', 'active');
    console.log(manualMap) // Map(2) {'name' => 'Joe Smith', 'status' => 'active'}
})();



(function(){    
    // Convert a Map to Array
    const arr = [
        ['name', 'Joe Smith'],
        ['status', 'active'],
    ]
    const mapByArr = new Map(arr);
    console.log(mapByArr); // Map(2) {'name' => 'Joe Smith', 'status' => 'active'}

    const arrFromMap = Array.from(mapByArr);
    console.log(arrFromMap); // [['name', 'Joe Smith'],['status', 'active']]

    const values = Array.from(mapByArr.values());
    console.log(values); // ['Joe Smith', 'active']

    const keys = Array.from(mapByArr.keys());
    console.log(keys); // ['name', 'status']
})();



(function(){    
    // How to use loop on Map
    const arr = [
        ['name', 'Joe Smith'],
        ['status', 'active'],
    ]
    const map = new Map(arr);
    console.log(map); // Map(2) {'name' => 'Joe Smith', 'status' => 'active'}
    
    for(const value of map.values()) {
        console.log(value);
    }

    for(const key of map.keys()) {
        console.log(key);
    }

    for(const [key, value] of map) {
        console.log(key, value);
    }

    for(const [key, value] of map.entries()) {
        console.log(key, value);
    }

    map.forEach((value, key) => {
        console.log(`${key} = ${value}`);
    });
})();


(function(){    
    // How to sort a Map object?
    const map = new Map();
    map.set("a",3);
    map.set("c",4);
    map.set("b",1);
    map.set("d",2);

    // sort map by value in decending order
    const mapSortDesc1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    console.log(mapSortDesc1);

    const mapSortDesc2 = new Map([...map].sort((a, b) => b[1] - a[1]));
    console.log(mapSortDesc2);

    // sort map by value in ascending order
    const mapSortAsc1 = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
    console.log(mapSortAsc1);

    const mapSortAsc2 = new Map([...map].sort((a, b) => a[1] - b[1]));
    console.log(mapSortAsc2);   
    
    // sort map by key ascending order
    const mapSortAsc3 = new Map([...map.entries()].sort());
    console.log(mapSortAsc3);

    // sort map by key descnding order
    const mapSortDec3 = new Map([...map.entries()].reverse());
    console.log(mapSortDec3);
})();
