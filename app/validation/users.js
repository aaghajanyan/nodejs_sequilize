const Joi = require("joi");

const passwordExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,24})/;
const addBodySchema = Joi.object().keys({
    invitationId: Joi.string()
        .uuid()
        .required(),
    password: Joi.string()
        .regex(passwordExp)
        .required()
});
const updateBodySchema = Joi.object().keys({
    password: Joi.string().regex(passwordExp)
});

const validateAddBody = (request, response, next) => {
    validateBody(request, response, next, addBodySchema);
};

const validateUpdateBody = (request, response, next) => {
    validateBody(request, response, next, updateBodySchema);
};

function validateBody(request, response, next, schema) {
    const result = Joi.validate(request.body, schema);
    if (result.error) {
        return response.status(400).json(result.error.details);
    }
    next();
}

module.exports = {
    validateAddBody,
    validateUpdateBody
};
