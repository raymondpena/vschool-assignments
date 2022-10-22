var enemies = ["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

function Who_Wins(is_there_kryptonite, enemyName){
    if (is_there_kryptonite){
    return "Superman beats " + enemyName + ", of course";
}
    else{
    return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyName +" could possibly win this one.";
}
}

let is_there_kryptonite

for(var i = 0; i < enemies.length; i++){
    if(i % 2 === 0){
        is_there_kryptonite = true
    } else{
        is_there_kryptonite = false
    }
    console.log(Who_Wins(is_there_kryptonite, enemies[i]))
}