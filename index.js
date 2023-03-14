function receivesAFunction(fun){
    fun();
}

function returnsANamedFunction(){
    return function fun(){}
}

function returnsAnAnonymousFunction(){
    return function(){}
}