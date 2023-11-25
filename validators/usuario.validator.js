import { checkSchema } from  'express-validator';

export const usuarioValidator = checkSchema({
    usuario: {
      errorMessage: 'Usuario invalido',
      notEmpty: true,
      isLength: {
        options: { min: 3 },
        errorMessage: 'El Usuario debe tener minimo 3 caracteres',
      },
    },
    clave: {
        errorMessage: 'Password invalido',
        notEmpty: true,
        isLength: {
          options: { min: 3 },
          errorMessage: 'El Password debe tener minimo 3 caracteres',
        },
    }
} ,["query"]);