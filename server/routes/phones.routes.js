const router = require("express").Router();
const data = require("../data/phones.json")

//GET => listamos todos los phones

router.get("/", (req, res, next)=>{
    res.status(200).json(data)
})


//GET => Mostramos los detalles de cada phone
router.get("/:id", (req, res, next)=>{
    const {id}= req.params
    res.status(200).json(data[id])

})





module.exports = router;