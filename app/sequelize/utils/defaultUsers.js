const bcrypt = require('bcrypt');

module.exports.initializeUserTable = async models => {
    const salt = await bcrypt.genSalt(10);
    const password = bcrypt.hashSync('Admin01!', salt);
    let user = {
        password: password,
        email: 'admin@test.com',
    };
    await models.user
        .build(user)
        .save()
        .catch(err => {});
};
