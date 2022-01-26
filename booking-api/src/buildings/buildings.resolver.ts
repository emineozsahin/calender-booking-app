import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BuildingsService } from './buildings.service';
import { Building } from './entities/building.entity';
import { CreateBuildingInput } from './dto/create-building.input';
import { UpdateBuildingInput } from './dto/update-building.input';

@Resolver(() => Building)
export class BuildingsResolver {
  constructor(private readonly buildingsService: BuildingsService) {}

  @Mutation(() => Building)
  createBuilding(@Args('createBuildingInput') createBuildingInput: CreateBuildingInput) {
    return this.buildingsService.create(createBuildingInput);
  }

  @Query(() => [Building], { name: 'buildings' })
  findAll() {
    return this.buildingsService.findAll();
  }

  @Query(() => Building, { name: 'building' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsService.findOne(id);
  }

  @Mutation(() => Building)
  updateBuilding(@Args('updateBuildingInput') updateBuildingInput: UpdateBuildingInput) {
    return this.buildingsService.update(updateBuildingInput.id, updateBuildingInput);
  }

  @Mutation(() => Building)
  removeBuilding(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsService.remove(id);
  }
}
