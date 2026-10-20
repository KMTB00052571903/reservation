import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomEntity } from '../rooms/entities/room.entity';
import { ReservationEntity } from './entities/reservation.entity';
import { ReservationRulesService } from './reservation-rules.service';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { ReservationSeedService } from './reservation-seed.service';
import { ReservationRulesService } from './reservation-rules.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationEntity, RoomEntity])],
  controllers: [ReservationsController],
  // TODO 2: Register ReservationRulesService as a provider.
  providers: [ReservationsService, ReservationSeedService],
  providers: [ReservationsService, ReservationRulesService],
})
export class ReservationsModule {}
