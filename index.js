function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    const spy = string.toUpperCase();
    console.log(spy);
    return string.toUpperCase();
}
function logWhisper(string){
    const spy = string.toLowerCase();
    console.log(spy);
    return string.toLowerCase();
}
function sayHiToGrandma(string){
    
    const tooSoft = string === string.toLowerCase() ? true : false;
    const yell = string === string.toUpperCase() ? true : false;
    if(tooSoft === true){
        return "I can\'t hear you!"
    }
    else if(yell === true){
        return "YES INDEED!"
    }
    else if(string === "I love you, Grandma."){
        return "I love you, too."
    }
    
}