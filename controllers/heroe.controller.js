import { getHeroeModel, getHeroeModelById, saveHeroeModel, deleteHeroModelById, updateHeroModel } from "../models/heroe.model.js";

export const getAll = async (req, res) =>{
    res.json({success: true, data: [] , msg : 'get All'})
}

export async function getHeroes (req, res){
    try {
        const data =await getHeroeModel();
        res.json({success: true, data: data , msg: 'Heroes encontrados'})     
    } catch (error) {
        res.json({success: true, data: [] , msg: 'No se encuentran datos'})     
    }
}

export async function getHeroeById (req, res){
    try {
        const data = await getHeroeModelById(req.params.id);

        if (data.length === 0) {
            res.status(404).json({ success: false, msg: 'No se encontró ningún héroe con el ID proporcionado.' });
        } 
        else {
            res.json({ success: true, data: data, msg: 'Heroe encontrado' });
        }    
    } catch (error) {
        res.json({success: false, data: [] , msg: 'No se encuentran datos'})     
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
            res.json({ success: true, data: data, msg: 'Heroe guardado exitosamente' });
        }    
    } catch (error) {
        res.status(500).json({ success: false, msg: `Error: ${error}` });
    }
}

export async function updateHero(req, res){
    try {
        let {id_hero, nombre, alter_ego} = req.body;

        let data = await updateHeroModel(id_hero, nombre, alter_ego);

        if (!data) {
            res.status(400).json({ success: false, msg: 'No hay data para actualizar.' });
        } 
        else {
            res.json({ success: true, data: data, msg: 'Heroe actualizado exitosamente' });
        }    
    } catch (error) {
        res.status(500).json({ success: false, msg: `${error}` });
    }
}

export async function deleteHeroById(req, res){
    try {
        const data = await deleteHeroModelById(req.params.id);  
        if (!data) {
            res.status(404).json({ success: false, msg: 'No se borró héroe con el ID proporcionado.' });
        } 
        else {
            res.json({ success: true, data: [], msg: 'Heroe borrado exitosamente' });
        }    
    } catch (error) {
        res.json({success: false, data: [] , msg: 'no se encuentran datos para borrar'})     
    }
}