import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configsEnvironment } from './configs/ConfigsEnvironment';
import { DataMockupModule } from './dataMockup/dataMockup.module';
import { PrismaModule } from './services/prismaService/prisma.module';
import { CountsMockupModule } from './services/v1/counts/counts.module';
import { CoursesMockupModule } from './services/v1/courses/courses.module';
import { TopicsMockupModule } from './services/v1/topics/topics.module';
import { CountsModule } from './services/v2/counts/counts.module';
import { CoursesModule } from './services/v2/courses/courses.module';
import { TopicsModule } from './services/v2/topics/topics.module';

@Module({
  imports: [
    CountsMockupModule,
    DataMockupModule,
    CoursesMockupModule,
    TopicsMockupModule,
    PrismaModule,
    CountsModule,
    CoursesModule,
    ConfigModule.forRoot({
      load: [configsEnvironment],
      isGlobal: true
    }),
    TopicsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
