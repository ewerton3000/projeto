import { Registration } from "src/registration/entities/registration.entity";
import { Column, Entity,OneToOne,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class File {
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    fileName?:string

    @Column()
    mimetype?:string

    @Column('bytea')  // Change to 'longblob' or 'blob'
    data?: Buffer;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at:Date

    @OneToOne(() => Registration, (registration) => registration.photo)
    registrationPhoto?:Registration

    @OneToOne(() =>Registration, (registration) => registration.copy_of_professional_registration)
    registrationProfessional?:Registration
}
        