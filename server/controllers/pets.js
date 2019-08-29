const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

module.exports = {
    all: (req, res) => {
        Pet.find().sort({ type: -1 })
        .then(allPets => res.json({Pets: allPets}))
        .catch(err => res.json(err))
    },
    show: (req, res) => {
        const { id } = req.params;
        Pet.find( {_id: id} )
        .then(thisPet => res.json({Pets: thisPet}))
        .catch(err => res.json(err))
    },
    new: (req, res) => {
        Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => res.json(err))
    },
    update: (req, res) => {
        const { id } = req.params;
        Pet.find({_id: id})
        .then(thisPet => {
            console.log(thisPet)
            console.log("req.body", req.body)
            thisPet[0].name=req.body.name
            thisPet[0].type=req.body.type
            thisPet[0].description=req.body.description
            thisPet[0].skill1=req.body.skill1
            thisPet[0].skill2=req.body.skill2
            thisPet[0].skill3=req.body.skill3
            thisPet[0].likes=req.body.likes
            console.log("test:",thisPet)
            thisPet[0].save()
            .then(success => {
                console.log('pet saved')
                res.json(success)
            })
            .catch(err => {
                console.log('pet not saved')
                res.json(err)
            })
        })
        .catch(err => res.json(err))
    },
    destroy: (req, res) => {
        const { id } = req.params;
        Pet.remove({_id: id})
        .then(removed => res.json(removed))
        .catch(err => res.json(err))
    },
}