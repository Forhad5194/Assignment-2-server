import express, { Request, Response } from 'express';
import { CommerceServices } from './e-commerce.services';
 const createElement = async( req:Request , res:Response ) => {
    const product = (req.body)
    const result = await CommerceServices.createElement(product)
 res.json({
       "success": true,
       "message": "Product created successfully!",
       "data": result,
    })
}






 const getProduct = async( req:Request , res:Response ) => {
    try{
    const result = await CommerceServices.getElement()
      res.status(200).json({
       "success": true,
       "message": "Product created successfully!",
       "data": result,
    })

    }catch(error:any) {
  res.status(500).json({
    "success": false,
    "message": "Products fetched successfully!",
    error: error
  })
    }
}


const getElementbyId = async( req:Request , res:Response ) => {
    try{
       const {productId } = req.params;
    const result = await CommerceServices.getElementbyId(productId)
      res.status(200).json({
       "success": true,
       "message": "Product created successfully!",
       "data": result,
    })

    }catch(error:any) {
  res.status(500).json({
    "success": false,
    "message": "Products fetched successfully!",
    error: error
  })
    }
}









export const CommerceController = {
    createElement,
    getProduct,
    getElementbyId
}