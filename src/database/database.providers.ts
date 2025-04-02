import { File } from "src/files/entities/file.entity";
import { Registration } from "src/registration/entities/registration.entity";
import { DataSource } from "typeorm";
import { utilDB } from "util.db";


export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async() =>{
            const dataSource = new DataSource({
                type: 'postgres', 
                host: process.env.HOST, 
                port:utilDB.dbPort ,
                username:process.env.USER,
                password:process.env.PASSWORD,
                database:process.env.DATABASE,
                entities:[__dirname + '/../**/*.entity{.ts,.js}'], 
            synchronize: true,
            });


            return dataSource.initialize()
        }
    }
]
 