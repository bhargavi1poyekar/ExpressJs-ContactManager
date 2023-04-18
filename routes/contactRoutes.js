const express=require("express");
const router=express.Router();

const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact} =require('../controllers/contactController');
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);
router.route('/').get(getContacts).post(createContact); //common route

// router.route('/').post(createContact);

router.route('/:id').get(getContact).put(updateContact).delete( deleteContact); // common route

// router.route('/:id').put(updateContact);

// router.route('/:id').delete( deleteContact);

module.exports=router; // export the router so it can be used in server.js