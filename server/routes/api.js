import express from "express";
import { sayHello } from "../controllers/apiController.js";
import { handleContactForm } from "../controllers/contactController.js";


const router = express.Router();

router.get('/hello', sayHello);
router.post('/contact', handleContactForm);

export default router;
