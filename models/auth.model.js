import pgService from "../services/pg.service.js";

export const getUserModel = async(usuario, clave) => {
    const pg =  new pgService(); 
    try{
        return await pg.connection.oneOrNone(`SELECT id, usuario, clave FROM usuarios WHERE usuario = $1 AND clave = $2`,[usuario, clave]);
    }
    catch(error){
        throw error;
    }
}