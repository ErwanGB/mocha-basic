//Repos,Sonnerie,EnConversation,EnAppel,Décroché
"use strict";

class Phone {
    constructor (){
        this.state = ""
    }
    AppelEntrant(){
        if (this.state == "Repos"){
            this.state = "Sonnerie"
        }
    }
    Decrocher(){
        if (this.state == "Repos"){
            this.state = "Décroché"
        }
        if(this.state == "Sonnerie"){
            this.state = "EnConversation"
        }
    }
    Raccrocher(){
        if (this.state == "EnConversation"){
            this.state = "Repos"
        }
        if (this.state == "EnAppel"){
            this.state = "Repos"
        }
        if (this.state == "Décroché"){
            this.state = "Repos"
        }       
    }
    Numeroter(){
        if (this.state == "Décroché"){
            this.state = "EnAppel"
        }
       
    }
    CorDecroche(){
        if (this.state == "EnAppel"){
            this.state = "EnConversation"
        }
        
    }
    CorRaccroche(){
        if (this.state == "Sonnerie"){
            this.state = "Repos"
        }
        if (this.state == "EnConversation"){
            this.state = "Repos"
        }
       
    }
    Timeout(){
        if (this.state == "Sonnerie"){
            this.state = "Repos"
        }
        if (this.state == "EnAppel"){
            this.state = "Décroché"
        }
        
    }
}






module.exports = Phone



