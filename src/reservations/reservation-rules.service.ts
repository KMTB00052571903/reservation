import { ConflictException, Injectable } from '@nestjs/common';
import { ReservationEntity } from './entities/reservation.entity';


@Injectable()
export class ReservationRulesService {
  ensureCanCancel(reservation: ReservationEntity): void {
    if (reservation.status === 'cancelled') {
      throw new ConflictException('La reserva ya está cancelada');
    }
  }
}

    // TODO 2: Implement the cancellation rule. Do not modify or save the reservation here.
