import { Module } from '@nestjs/common';
import { DataMockupModule } from './dataMockup/dataMockup.module';
import { CountsModule } from './services/counts/counts.module';
import { CoursesModule } from './services/courses/courses.module';

@Module({
  imports: [
    CountsModule,
    DataMockupModule,
    CoursesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
