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

export const saveHeroeModel = async(id_hero, nombre, altura, peso, experiencia, hp, ataque, defensa, ataque_especial, defensa_especial, velocidad, habilidad) => {
    const pg =  new pgService(); 
    try{
        await pg.connection.query
        ("INSERT INTO heroe (id_hero, nombre, altura, peso, experiencia, hp, ataque, defensa, ataque_especial, defensa_especial, velocidad, habilidad) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) ",
        [id_hero, nombre, altura, peso, experiencia, hp, ataque, defensa, ataque_especial, defensa_especial, velocidad, habilidad]);
        return 'Registro realizado exitosamente';
    }
    catch(error){
        throw error;
    }
}

export const updateHeroModel = async(id_hero, nombre, altura, peso, experiencia, hp, ataque, defensa, ataque_especial, defensa_especial, velocidad, habilidad)=>{
    const pg =  new pgService(); 
    try{
        await pg.connection.query
        (`UPDATE heroe SET nombre = $2, altura = $3, peso = $4, experiencia = $5, hp = $6, ataque = $7, defensa = $8, ataque_especial = $9, defensa_especial = $10, velocidad = $11, habilidad = $12  WHERE id_hero = $1`,
        [id_hero, nombre, altura, peso, experiencia, hp, ataque, defensa, ataque_especial, defensa_especial, velocidad, habilidad]); 
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