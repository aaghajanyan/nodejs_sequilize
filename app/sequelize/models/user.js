const {initializeUserTable} = require('../utils/defaultUsers');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "user",
        {
            email: {
                type: DataTypes.STRING,
                allowNull: {
                    args: false,
                    msg: "Please enter email address"
                },
                unique: {
                    args: true,
                    msg: "Email already exists"
                },
                validate: {
                    isEmail: {
                        args: true,
                        msg: "Please enter a valid email address"
                    }
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: {
                    args: false,
                    msg: "Please enter a password"
                },
            }
        },
        {
            timestamps: false
        }
    );

    User.initDefaultValues = async function(models) {
        await initializeUserTable(models);
    };
    return User;
};
