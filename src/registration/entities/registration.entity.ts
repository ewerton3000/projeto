import { File } from "src/files/entities/file.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Registration {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    name?: string

    @Column({ length: 100 })
    email?: string
 
    @Column({ length: 90 })
    professional_registration: string

    @Column({ length: 90 })
    area_of_activity?: string

    @Column({ length: 80 })
    specialization: string

    @Column({ length: 100 })
    professional_description: string

    @Column({ length: 100 })
    language: string

    @Column({ length: 50 })
    type_of_service: string

    @Column({ length: 100 })
    service_address: string

    @Column()
    phone: string

    @Column({ length: 200 })
    social_link_and_professional_site: string

    @Column({ length: 100 })
    services_offered: string

    @Column('decimal', {
        precision:5,
        scale:2
    })
    values: number

    @Column({ length: 100 })
    accepted_conventions: string

    @Column({ length: 100 })
    availability_of_schedules: string
    
    @Column({ length: 255 })
    photo:string
    
    @Column({length:255})
    copy_of_professional_registration:string

    @Column({ length: 100 }) 
    information_authorization: string
}  
                               