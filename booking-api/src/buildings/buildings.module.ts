import { CompaniesModule } from './../companies/companies.module';
import { CompaniesService } from './../companies/companies.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Building, BuildingSchema } from './entities/building.entity';
import { MeetingRoom } from './entities/meeting-room.entity'
import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { BuildingsResolver } from './buildings.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: Building.name, schema: BuildingSchema }]), CompaniesModule],
  providers: [BuildingsResolver, BuildingsService]
})
export class BuildingsModule implements OnApplicationBootstrap {
  constructor(private buildingsService: BuildingsService, private companiesService: CompaniesService) {}
  
  async onApplicationBootstrap() {
    const NUMBER_OF_ROOMS = 20
console.log("WTTF")
    const companies = await this.companiesService.findAll().select({ _id: 1, name: 1}).lean()
    const meetingRooms: MeetingRoom[] = [... new Array(NUMBER_OF_ROOMS)].map((item, index) => {
      const middleIndex = NUMBER_OF_ROOMS / companies.length - 1
      const assignedCompany = index <= middleIndex ? 'PEPSI': 'COKE'
      
      return {
        name: `${assignedCompany} ${index <= middleIndex ? index + 1: index - middleIndex}`,
        company: companies.find(company => company.name === assignedCompany)._id
      }
    })

    const buildings: Building[] = [{
      name:'Coke and Pepsi Building',
      address:'',
      meetingRooms:meetingRooms,
      companiesInBuilding: companies.map(company => company._id)
    }]

    console.log('created buildings', buildings)
    await this.buildingsService.deleteAll()
    await this.buildingsService.bulkCreate(buildings)
  }
}
