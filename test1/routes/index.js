var express = require('express');
var router = express.Router();
const axios = require('axios');
var userId=0;

/* GET home page. */
router.get('/', function (req, res, next) {

    axios.get('http://www.dnd5eapi.co/api/races').then(resp1 => {
        if(userId>0){
            axios.get('http://www.dnd5eapi.co/api/races/'+userId).then(resp2 => {
                res.render('index', {Player: resp1.data.results,Person: resp2.data});

            });
        }else {
            res.render('index', {Player: resp1.data.results});
        }



    });



});

router.get('/person/:id',function (req,res) {
    userId=parseInt(req.params.id)+1;
    res.redirect('/');




});

module.exports = router;
