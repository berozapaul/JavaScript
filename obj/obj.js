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