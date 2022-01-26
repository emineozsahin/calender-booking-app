import { Company, CompanySchema } from './entities/company.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesResolver } from './companies.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }])],
  providers: [CompaniesResolver, CompaniesService],
  exports: [CompaniesService]
})
export class CompaniesModule implements OnApplicationBootstrap {
  constructor(private companiesService: CompaniesService) {}
  
  async onApplicationBootstrap() {
    const companies = [{
      name: 'PEPSI',
      employees: []
    }, {
      name: 'COKE',
      employees: []
    }]
    await this.companiesService.deleteAll()
    await this.companiesService.bulkCreate(companies)
  }
}
