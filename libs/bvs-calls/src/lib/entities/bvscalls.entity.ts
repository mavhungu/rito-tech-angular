import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bvscalls {

  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column("varchar",{length:255})
  CallFrom: string | undefined

  @Column("varchar",{length:255})
  CallTo: string | undefined

  @Column({type: 'datetime'})
  CallTime: string | undefined

  @Column({type: 'time'})
  Duration: string | undefined

  @Column({type: 'time'})
  Billing: string | undefined

  @Column({type: 'double'})
  Cost: number | undefined

  @Column("varchar",{length:50})
  Status: string | undefined

}
