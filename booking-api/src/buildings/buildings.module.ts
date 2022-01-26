import { MongooseModule } from '@nestjs/mongoose';
import { Building, BuildingSchema } from './entities/building.entity';
import { Module } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { BuildingsResolver } from './buildings.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: Building.name, schema: BuildingSchema }])],
  providers: [BuildingsResolver, BuildingsService]
})
export class BuildingsModule {}
