import { checkSchema } from  'express-validator';

export const heroeValidator = checkSchema({
    id: {
      errorMessage: "ID de héroe inválido",
      isInt: true,
      toInt: true,
    }
} ,["params"]);

export const sendHeroeValidator = checkSchema({
  nombre: {
    errorMessage: "Nombre invalido",
    notEmpty: true,
    isLength: {
      options: { min: 3 },
      errorMessage: 'El nombre debe tener minimo tres caracteres',
    },
    matches: {options: /[a-zA-Z]/},
  }
} ,["body"]);