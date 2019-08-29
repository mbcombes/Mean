const pets = require("../controllers/pets");


module.exports = (app) => {
    app.get("/api/pets", pets.all),                 //GET: All pets
    app.get("/api/pets/:id", pets.show),               //GET: One pet by id
    app.post("/api/pets", pets.new),                  //POST: Create a pet
    app.put("/api/pets/:id", pets.update),            //PUT: Update a pet by id
    app.delete("/api/pets/:id", pets.destroy)         //DELETE: Delete a pet by id
    
}