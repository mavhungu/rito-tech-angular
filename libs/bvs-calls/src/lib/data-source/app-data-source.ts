import { DataSource } from 'typeorm';
import { BVSCalls } from '../entities/bvscalls.entity';

export const BvsCallsDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'rito',
  entities: [BVSCalls],
  synchronize: true
})

BvsCallsDataSource.initialize()
  .then(()=>{
    console.log("Data Source has been initialized!")
  })
  .catch((error)=>{
    console.error("Error during Data Source initialization ::::::", error)
  })