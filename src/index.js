import app from "./app.js";
import { sequelize } from "./database/database.js";
import { PORT } from "./config.js";

async function main() {
    try {
        // await sequelize.authenticate();
        await sequelize.sync();
        console.log("database ok");
        app.listen(PORT, () => {
            console.log(`App in port: ${PORT}`);
        });
    } catch (error) {
        console.log("database connection error. Error:", error);
    }
}

main();
