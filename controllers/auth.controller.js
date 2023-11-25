import jwt from "jsonwebtoken";
import { exports } from "../config/default.js";
import { getUserModel } from "../models/auth.model.js";

export const login = async (req, res) =>{
    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            username: 'admin',
            role: 'rol_admin'
        }
      },  exports.secret);
    res.status(200).json({
        token : token,
        success: true, 
        data: [] , 
        msg : "Logeado Correctamente"
    });
}

export async function getUser(req, res){

    try{
        let {usuario, clave} = req.query;

        let data = await getUserModel(usuario, clave);

        if (!data) {
            res.status(400).json({ success: false, msg: 'Invalid credentials' });
        } 
        else {
            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: {
                    username: 'admin',
                    role: 'rol_admin'
                }
              },  exports.secret);
            res.status(200).json({
                token : token,
                success: true, 
                data: [] , 
                msg : "Logeado Correctamente"
            });
        }

    }catch (error) {
        res.status(500).json({ success: false, msg: `Error: ${error}` });
    }
}