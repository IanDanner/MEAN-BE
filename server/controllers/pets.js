var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');

module.exports = {
    showAll: (req, res) => {
        Pet.find({}).sort({"type": 1}).exec(function(err, Pets){
            if(err){
                res.json(err);
            } else{
                res.json(Pets);
            }
        })
    },

    showOne: (req, res) => {
        Pet.findOne({_id: req.params.id},function(err, Pet){
            if(err){
                res.json(err);
            } else{
                res.json(Pet);
            }
        })
    },

    create: (req, res) => {
        var newPet = new Pet({
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            skill1: req.body.skill1,
            skill2: req.body.skill2,
            skill3: req.body.skill3,
            likes: req.body.likes,
        });
        newPet.save(function(err, newPet){
            if(err){
                res.json(err);
            } else{
                res.json(newPet);
            }
        })
    },

    update: (req, res) => {
        Pet.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}, function(err, Pet){
            if(err){
                res.json(err);                
            } else{
                res.json(Pet);
            }
        })
    },

    delete: (req, res) => {
        Pet.remove({_id: req.params.id}, function(err, data){
            if(err){
                res.json(err);
            } else{
                res.json(data);
            }
        })
    }
}