import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingsModule } from './bookings/bookings.module';
import { BuildingsModule } from './buildings/buildings.module';
import { CompaniesModule } from './companies/companies.module';

import { join } from 'path'
@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      // autoSchemaFile: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const url = configService.get<string>('MONGODB_URL')
        return {
          uri: url,
        }
      },
      inject: [ConfigService],
    }),
    BookingsModule,
    BuildingsModule,
    CompaniesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
