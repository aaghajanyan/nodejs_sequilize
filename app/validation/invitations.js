const Joi = require("joi");

const addBodySchema = Joi.object().keys({
    email: Joi.string()
        .email()
        .required()
});

const validateBody = (request, response, next) => {
    const result = Joi.validate(request.body, addBodySchema);
    if (result.error) {
        return response.status(400).json(result.error.details);
    }
    next();
};

module.exports = {
    validateBody
};
