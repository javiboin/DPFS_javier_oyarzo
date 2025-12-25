const { body } = require('express-validator');
const userServices = require('../../services/userServices');
const path = require('path');

const userValidations = {
    register: [
       body('firstName')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
        body('lastName')
            .notEmpty().withMessage('El apellido es obligatorio')
            .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres'),
        body('email')
            .notEmpty().withMessage('El email es obligatorio')
            .isEmail().withMessage('Debe ser un email válido')
            .custom(async value => {
                const user = await userServices.searchEmailUser(value);
                if (user) {
                    throw new Error('El correo electronico ya se encuentra registrado');
                }
            }),
        body('password')
            .notEmpty().withMessage('La contraseña es obligatoria')
            .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
            .matches(/\d/).withMessage('La contraseña debe contener al menos un número')
            .matches(/[a-z]/).withMessage('La contraseña debe contener al menos una letra minúscula')
            .matches(/[A-Z]/).withMessage('La contraseña debe contener al menos una letra mayúscula')
            .matches(/[^a-zA-Z0-9]/).withMessage('La contraseña debe contener al menos un carácter especial'),
        body('confirmPassword')
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Las contraseñas no coinciden');
                }
                return true;
            }),
        body('file')
            .custom(({ req }) => {
                if (!req.file) {
                    throw new Error('La imagen es obligatoria');
                }

                const allowedExt = ['.jpg', '.jpeg', '.png', '.gif'];
                const fileExt = path.extname(req.file.originalname).toLowerCase();

                if (!allowedExt.includes(fileExt)) {
                    throw new Error(`Extensiones permitidas: ${allowedExt.join(', ')}`);
                }

                return true;
            })
    ],
    access: [
        body('email')
            .notEmpty().withMessage('El email es obligatorio')
            .isEmail().withMessage('Debe ser un email válido')
            .custom(async value => {
                const user = await userServices.searchEmailUser(value);
                if (!user) {
                    throw new Error('Correo electrónico no encontrado');
                }
            }),
        body('password')
            .notEmpty().withMessage('La contraseña es obligatoria')
    ]
};

module.exports = userValidations;
