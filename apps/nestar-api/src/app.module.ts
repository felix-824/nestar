import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from './app.resolver';
import { ComponentsModule } from './components/components.module';
import { DatabaseModule } from './database/database.module';

@Module({
	imports: [
		ConfigModule.forRoot(), //.env
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
		GraphQLModule.forRoot({ 
			driver: ApolloDriver,
			playground: true,
			uploads: false,
			autoSchemaFile: true,
		}), //REST > GraphQl

		ComponentsModule, // MODULLARni chaqirish
		DatabaseModule,   // DATABASE TCP ni hosil qilyabdi
	],
	controllers: [AppController],
	providers: [AppService, AppResolver],
})
export class AppModule {}
