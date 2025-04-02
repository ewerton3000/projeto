import { DataSource } from "typeorm";
import { Registration } from "./entities/registration.entity";

export const registrationProviders = [
    {
        provide: 'REGISTRATION_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Registration),
        inject: ['DATA_SOURCE'],
    },
] 