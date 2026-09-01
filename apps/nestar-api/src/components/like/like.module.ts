import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import LikeSchema from '../../schemas/Like.model';

@Module({
    imports: [
         MongooseModule.forFeature([{
       name: "Like",
       schema: LikeSchema }
      ]),
    ],
    providers: []
})
export class LikeModule {}
