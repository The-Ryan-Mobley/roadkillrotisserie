const express = require('express');
const path = require('path');

var app = express();
const table = require('./data.js');
module.exports = (app)=>{
    //**************************************************HTML ROUTES******************************************************* */
    app.get("/", (req, res)=> {
        res.sendFile(path.join(__dirname, "./hotfood.html"));
    });
    app.get("/reservation", (req, res)=> {
        res.sendFile(path.join(__dirname, "./reservations.html"));
    });
    app.get("/tables", (req, res)=> {
        res.sendFile(path.join(__dirname, "./tables.html"));
    });
    app.get("/logic.js", (req, res)=> {
        res.sendFile(path.join(__dirname, "./logic.js"));
    
    });
    app.get("/style.css", (req, res)=> {
        res.sendFile(path.join(__dirname, "./style.css"));
    
    });
    app.get((req, res)=> {
        res.sendFile(path.join(__dirname, "./hotfood.html"));
    });
    //**************************************************API ROUTES ********************************************************** */
    app.get("/api/tables", (req, res)=> {
        return res.json(table.tables);

    });
    app.get('/api/waitlist',(req,res)=>{
        return res.json(table.reservations);
    })

    app.post("/api/tables", function (req, res) {
        //console.log(req.body);
        var newRes = req.body;
        newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
        table.reservations.push(newRes);
        res.json(newRes);
        console.log('success'+table);
        
    });
    


}