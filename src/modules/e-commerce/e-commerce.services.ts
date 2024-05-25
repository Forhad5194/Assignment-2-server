import { TEommerce } from "./e-commerce.interface";
import { commerce } from "./e-commerce.model";

const createElement = async (payload: TEommerce) => {
    const result = await commerce.create(payload);
    return result;
}


const getElement = async () => {
    const result = await commerce.find();
    return result;
}

const getElementbyId = async (id:string) => {
    const result = await commerce.findById({id});
    return result;
}

export const  CommerceServices = {
    createElement,
    getElement,
    getElementbyId

};