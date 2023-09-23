import { getHeroeModel, getHeroeModelById, saveHeroeModel } from "../models/heroe.model.js";

export const getAll = async (req, res) =>{
    res.json({success: true, data: [] , msg : 'get All'})
}

export async function getHeroes (req, res){
    try {
        const data =await getHeroeModel();
        res.json({success: true, data: data , msg: 'getHeroe'})     
    } catch (error) {
        res.json({success: true, data: [] , msg: 'no se encuentran datos :)'})     
    }
}

export async function getHeroeById (req, res){
    try {
        const data = await getHeroeModelById(req.params.id);

        if (data.length === 0) {
            res.status(404).json({ success: false, msg: 'No se encontró ningún héroe con el ID proporcionado.' });
        } 
        else {
            res.json({ success: true, data: data, msg: 'getHeroeById' });
        }    
    } catch (error) {
        res.json({success: false, data: [] , msg: 'no se encuentran datos :)'})     
    }
}

export async function saveHeroe (req, res){
    try {
        let {id_hero, nombre, alter_ego} = req.body;

        let data = await saveHeroeModel(id_hero, nombre, alter_ego);

        if (!data) {
            res.status(400).json({ success: false, msg: 'No hay data para guardar.' });
        } 
        else {
            res.json({ success: true, data: data, msg: 'saveHero' });
        }    
    } catch (error) {
        res.status(500).json({ success: false, msg: `Error: ${error}` });
    }
}