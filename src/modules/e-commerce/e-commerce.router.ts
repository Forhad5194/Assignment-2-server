
import { CommerceController } from './e-commerce.controller';
import express from 'express';


const router = express.Router();

router.post('/', CommerceController.createElement )
router.get('/', CommerceController.getProduct )
router.get('/:productId', CommerceController.getElementbyId )



export const EcommerceRoter = router;