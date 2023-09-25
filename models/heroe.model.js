import pgService from "../services/pg.service.js";

export const getHeroeModel = async () => {
    const pg =  new pgService(); 
    try{
        return await  pg.connection.query("SELECT * FROM heroe");
    }
    catch(error){
        throw error;
    }
}

export const getHeroeModelById = async (id) => {
    const pg =  new pgService(); 
    try{
        return await  pg.connection.query(`SELECT * FROM heroe WHERE id_hero = ${id}`);
    }
    catch(error){
        throw error;
    }
}

export const saveHeroeModel = async(id_hero, nombre, alter_ego) => {
    const pg =  new pgService(); 
    try{
        await pg.connection.query
        ("INSERT INTO heroe (id_hero, nombre, alter_ego) values($1, $2, $3) ",[id_hero, nombre, alter_ego]);
        return 'Registro realizado exitosamente';
    }
    catch(error){
        throw error;
    }
}

export const updateHeroModel = async(id_hero, nombre, alter_ego)=>{
    const pg =  new pgService(); 
    try{
        await pg.connection.query
        (`UPDATE heroe SET nombre = $2, alter_ego = $3 WHERE id_hero = $1`,[id_hero, nombre, alter_ego]); 
        return 'Registro actualizado exitosamente';
    }
    catch(error){
        throw error;
    }
}

export const deleteHeroModelById = async(id)=>{
    const pg =  new pgService(); 
    try {
        await pg.connection.query(`DELETE FROM heroe WHERE id_hero =  ${id}`);
        return 'Registro eliminado exitosamente';
    } catch (error) {
        throw error;
    }
}