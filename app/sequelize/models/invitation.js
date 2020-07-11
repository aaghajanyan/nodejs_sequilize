module.exports = (sequelize, DataTypes) => {
    const Invitation = sequelize.define(
        "invitation",
        {
            id: {
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            },
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
            }
        },
        {
            timestamps: false
        }
    );
    return Invitation;
};
