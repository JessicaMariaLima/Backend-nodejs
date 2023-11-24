import { Sequelize } from 'sequelize';
import  dotenv from 'dotenv'
dotenv.config()

// importando a conexão
export const sequelize = new Sequelize (

//recebendo os parametros para nosso banco
process.env.MYSQL_DB as string, 
process.env.MYSQL_USER as string,
process.env.MYSQL_PASSWORD as string,
{
    dialect: 'mysql',
    port: parseInt(process.env.MYSQL_PORT as string)
    
}



)