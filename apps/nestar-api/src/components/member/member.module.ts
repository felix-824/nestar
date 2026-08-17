import { Module } from '@nestjs/common';
import { MemberResolver } from './member.resolver';
import { MemberService } from './member.service';
import MemberSchema from '../../schemas/Member.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
       //MemberSchemaModel
    MongooseModule.forFeature([{ name: "Member", schema: MemberSchema }])
  ],  
  providers: [
    MemberResolver, //Member Controller
    MemberService   // Member Service Model
    ],
})
export class MemberModule {} 
 