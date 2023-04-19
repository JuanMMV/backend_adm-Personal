import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Persona = sequelize.define("tbl_personas", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rut: {
        type: DataTypes.STRING(10),
    },
    name: {
        type: DataTypes.STRING(50),
    },
    phone: {
        type: DataTypes.STRING(12),
    },
    email: {
        type: DataTypes.STRING(50),
    },
});
