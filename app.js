
function Addition(op1,op2){
    return op1 + op2
}

function Accepte(client,commande){
    let res
    switch(client.type) {
        case "N":
            if ((1000 < client.encours && client.encours < 3000 && commande > 5000) || (client.encours > 3000 && commande > 1000)){
                return false
            } else {
                return true
            }
            break;
        case "P":
            if (client.encours > 3000 && commande > 5000){
                return false
            } else {
                return true
            }
            break;
        case "S":
            if (commande > 5000 && (client.encours > 1000 && commande > 1000)){
                res = false
            } else {
                return true
            }
            break;      
        default:
                return true
    }
}



module.exports = {Addition,Accepte}


