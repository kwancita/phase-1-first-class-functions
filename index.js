
function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    return function whatEver(){
        console.log("Hi")
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("what?")
    }
}

