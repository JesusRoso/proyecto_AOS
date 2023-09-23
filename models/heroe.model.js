import pgService from "../services/pg.service.js";

export const getHeroeModel = async () => {
    const pg =  new pgService(); 
    return await  pg.connection.query("SELECT * FROM heroe");
}

export const getHeroeModelById = async (id) => {
    const pg =  new pgService(); 
    return await  pg.connection.query(`SELECT * FROM heroe WHERE id_hero = ${id}`);
}

export const saveHeroeModel = async(id_hero, nombre, alter_ego) => {
    const pg =  new pgService(); 
    await pg.connection.query("INSERT INTO heroe (id_hero, nombre, alter_ego) values($1, $2, $3) ",[id_hero, nombre, alter_ego]);
    return 'Registro realizado exitosamente';
}