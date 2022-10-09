(function(){
    // Initialize an object literal
    const obj = {};
    obj.name = 'Joe Smith';
    obj.status = 'active';
    console.log(obj); // {name: 'Joe Smith', status: 'active'}
})();


(function(){    
    // Convert an object literal to Array
    const obj = {name: 'Joe Smith', status: 'active'};
    console.log(obj); //{name: 'Joe Smith', status: 'active'}

    const arrFromObj = Object.keys(obj).map(k => [k, obj[k]]);
    console.log(arrFromObj); 

    const values = Object.values(obj);
    console.log(values); 

    const keys = Object.keys(obj);
    console.log(keys); 
})();



(function(){    
    // How to use loop on object literal
    const obj = {name: 'Joe Smith', status: 'active'};
    console.log(obj); // {name: 'Joe Smith', status: 'active'}
    
    const values = Object.values(obj);
    console.log(values); 

    const keys = Object.keys(obj);
    console.log(keys); 

    for(const [key, value] of Object.entries(obj)) {
        console.log(key, value);
    }

    for( const idx in obj) {
        console.log(idx, obj[idx]);
    }
})();


(function(){    
    // How to sort an object?
    const obj = {};
    obj["a"] = 3;
    obj["c"] = 4;
    obj["b"] = 1;
    obj["d"] = 2;

    // sort object by value in decending order
    const objSortDesc1 = [...Object.entries(obj)].sort((a, b) => b[1] - a[1]);
    console.log(objSortDesc1);

    // sort object by value in ascending order
    const objSortDesc2 = [...Object.entries(obj)].sort((a, b) => b[1] - a[1]);
    console.log(objSortDesc2);

    // sort object by key ascending order
    const keysSortAsc = Object.keys(obj).sort(function(a, b){return obj[a]-obj[b]})
    console.log(keysSortAsc);

    // sort object by key ascending order
    const keysSortDec = Object.keys(obj).sort(function(a, b){return obj[b]-obj[a]})
    console.log(keysSortDec);

    // sort object by value ascending order
    const valueSortAsc = Object.values(obj).sort(function(a, b){return a - b})
    console.log(valueSortAsc);

    // sort object by key ascending order
    const valueSortDec = Object.values(obj).sort(function(a, b){return b - a})
    console.log(valueSortDec);
})();