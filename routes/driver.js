var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');
const v = new Validator();

const { Driver } = require('../models')


router.get('/getDrivers', async(req, res) => {
    const driver = await Driver.findAll();
    const response = {
        status : 200,
        messages : 'success',
        data : driver
    }
    return res.json(response)
})


router.get('/getDriver', async(req, res) => {
    id = req.query.id;

    const driver = await Driver.findByPk(id);
    const response = {
        status : 200,
        messages : 'success',
        data : driver
    }
    return res.json(response)
})

router.post('/', async (req, res) => {

    const schema = {
        name : 'string',
        gender : 'string'
    }
    const validate = v.validate(req.body, schema);
    if (validate == false)
    {
        return res.status(400).json(validate);
    }

    const drivers = await Driver.create(req.body);

    const response = {
        status : 200,
        messages : 'success',
        data : drivers
    }

    res.send(response)
});


router.put('/', async(req, res) => {
    const id = req.query.id;

   let driver = await Driver.findByPk(id);
   if (!driver)
   {
       return res.json({
           status : 404,
           messages : 'Driver is not found'
        
       })
   }
   const schema = {
    name : 'string|optional',
    gender : 'string|optional'
    }
    const validate = v.validate(req.body, schema);
    if (validate == false)
    {
        return res.status(400).json(validate);
    }

    driver = await driver.update(req.body);
    res.json(driver);

}) 

router.delete('/deleteDriver', async(req, res) => {
    id = req.query.id;
    let driver = await Driver.findByPk(id);
   if (!driver)
   {
       return res.json({
           status : 404,
           messages : 'Driver is not found'
        
       })
   }

   await driver.destroy();
    res.json({
    status : 200,
    messages : 'Driver successfuly deleted'
 
})
})

module.exports = router;
