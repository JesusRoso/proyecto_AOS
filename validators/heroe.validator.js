import { checkSchema } from  'express-validator';

export const heroeValidator = checkSchema({
    id: {
      errorMessage: "ID de héroe inválido",
      isInt: true,
      toInt: true,
    }
} ,["params"]);

export const sendAndUpdateHeroeValidator = checkSchema({
  id_hero: {
    errorMessage: "Id de héroe inválido",
    isInt: true,
    toInt: true,
  },
  nombre: {
    errorMessage: "Nombre inválido",
    notEmpty: true,
    isLength: {
      options: { min: 3 },
      errorMessage: 'El nombre debe tener mínimo tres caracteres',
    },
    matches: {options: /[a-zA-Z]/},
  },
  alter_ego: {
    errorMessage: "Alter ego inválido",
    notEmpty: true,
    isLength: {
      options: { min: 3 },
      errorMessage: 'El Alter ego debe tener mínimo tres caracteres',
    }
  }
} ,["body"]);