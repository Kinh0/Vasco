const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.end("Vasco Campeão!");
});

app.get("/Ino", function(req, res){
    res.send("Vamos todos cantar de coração, A cruz do malta é o teu pendão, Tu tens o nome do heroico português, Vasco da Gama, a tua fama assim se fez.")

})

app.get("/ino2", function(req, res){
    res.send("Tua imensa torcida é bem feliz, Norte e sul, norte e sul desse Brasil, Tua estrela na terra a brilhar, Ilumina o mar.")
})

app.get("/ino3", function(req, res){
    res.send("No atletismo és um braço, No remo és imortal, No futebol és um traço, De união Brasil-Portugal")
})

app.get("/ino4", function(req, res){
    res.send("No atletismo és um braço, No remo és imortal, No futebol és um traço, De união Brasil-Portugal")
})



app.listen(4002, function(){
    console.log("Vasco")
});
