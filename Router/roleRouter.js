const rolecontrolleur = require('../Controllers/roleController');
const router = require('express').Router();

router.post('/ajouterrole', rolecontrolleur.ajouterrole);
router.get('/getall', rolecontrolleur.getall);
router.get('/getbyid/:id', rolecontrolleur.getbyid);
router.delete('/delete/:id', rolecontrolleur.delete);
router.put('/update/:id', rolecontrolleur.update);

module.exports = router;