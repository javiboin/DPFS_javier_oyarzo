const { body } = require('express-validator');
const path = require('path');

const productValidations = {
    save: [
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
            
        body('name')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres'),

        body('brand')
        .notEmpty().withMessage('La marca es obligatoria'),
        
        body('subcategoryId')
            .notEmpty().withMessage('La subcategoria es obligatoria'),

        body('price')
            .notEmpty().withMessage('El precio es obligatorio')
            .isNumeric().withMessage('El precio debe ser un número'),

        body('priceCash')
            .notEmpty().withMessage('El precio en efectivo es obligatorio')
            .isNumeric().withMessage('El precio en efectivo debe ser un número'),

        body('priceInstallmentCount')
            .notEmpty().withMessage('La cantidad de cuotas es obligatorio')
            .isNumeric().withMessage('La cantidad de cuotas debe ser un número'),

        body('priceInstallment')
            .notEmpty().withMessage('El precio en cuotas es obligatorio')
            .isNumeric().withMessage('El precio en cuotas debe ser un número'),

        body('description')
            .notEmpty().withMessage('La descripción es obligatoria')
            .isLength({ min: 20 }).withMessage('La descripción debe tener al menos 20 caracteres')
    ]
}

module.exports = productValidations;