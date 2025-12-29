const { body } = require('express-validator');
const userServices = require('../../services/userServices');
const path = require('path');

const userValidations = {
    register: [
        body('file')
            .custom((value, { req }) => {
                if (!req.file) {
                    throw new Error('La imagen es obligatoria');
                }

                const allowedExt = ['.jpg', '.jpeg', '.png', '.gif'];
                const fileExt = path.extname(req.file.originalname).toLowerCase();

                if (!allowedExt.includes(fileExt)) {
                    throw new Error(`Extensiones permitidas: ${allowedExt.join(', ')}`);
                }
                return true;
            }),
        body('email')
            .notEmpty().withMessage('El email es obligatorio')
            .isEmail().withMessage('Debe ser un email válido')
            .custom(async value => {
                const user = await userServices.searchEmailUser(value);
                if (user) {
                    throw new Error('El correo electronico ya se encuentra registrado');
                }
                return true;
            }),
       body('firstName')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 2 }).withMessage('El nombre debe tener al menos 2 caracteres'),
        body('lastName')
            .notEmpty().withMessage('El apellido es obligatorio')
            .isLength({ min: 2 }).withMessage('El apellido debe tener al menos 2 caracteres'),
        body('password')
            .notEmpty().withMessage('La contraseña es obligatoria')
            .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
            .isStrongPassword({
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1
            }).withMessage('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número'),
        body('confirmPassword')
            .custom((value, { req }) => {
                if (value !== '' && req.body.password !== '') {
                    if (value !== req.body.password) {
                        throw new Error('Las contraseñas no coinciden');
                    }
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
            .bail()
            .custom(async (value, { req }) => {
                const user = await userServices.searchEmailUser(req.body.email);
                const passwordDesencrypted = await userServices.compareHash(value, user.password);
                if (!passwordDesencrypted) {
                    throw new Error('La contraseña no es correcta');
                }
                return true;
            })
    ]
};

module.exports = userValidations;
