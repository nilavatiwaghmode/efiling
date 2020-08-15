// callback function 
function show(){
    console.log('show function called');
}
function display(callback){
    console.log('display function called');
    callback();
}

display(show);