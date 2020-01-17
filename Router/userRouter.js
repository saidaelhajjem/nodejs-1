const usercontroller = require('../Controllers/userControllers');
const router = require('express').Router();

router.post('/ajouterUser', usercontroller.ajouterUser);
router.get('/getall', usercontroller.getall);
router.get('/getone/:id', usercontroller.getone);
router.delete('/delete/:id', usercontroller.deleteuser);
router.put('/update/:id', usercontroller.updateuser);
router.post('/auth', usercontroller.authentification);



module.exports = router; //pour exporter router