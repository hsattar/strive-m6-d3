import { Sequelize } from "sequelize"

// const sequelize = new Sequelize(process.env.DB_URL)
const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_DIALECT} = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: DB_DIALECT
}, { logging: false })

export const testDBConnection =  async () => {
    try {
        await sequelize.authenticate()
        console.log('DB Test Success')
    } catch (error) {
        console.log(error)
    }
}