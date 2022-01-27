import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  await app.listen(8000)
  console.log('app listening on 8000')
}

bootstrap()
