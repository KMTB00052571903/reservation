import { ConflictException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RoomEntity } from '../rooms/entities/room.entity';
import { ReservationEntity } from './entities/reservation.entity';
import { ReservationRulesService } from './reservation-rules.service';
import { ReservationsService } from './reservations.service';

describe('ReservationsService', () => {
  let service: ReservationsService;
  let reservationsRepositoryMock: {
    findOne: jest.Mock;
    find: jest.Mock;
    create: jest.Mock;
    save: jest.Mock;
  };
  let roomsRepositoryMock: { findOneBy: jest.Mock };
  let reservationRulesServiceMock: { ensureCanCancel: jest.Mock };

  beforeEach(async () => {
    reservationsRepositoryMock = {
      findOne: jest.fn(),
      find: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
    };
    roomsRepositoryMock = { findOneBy: jest.fn() };
    reservationRulesServiceMock = { ensureCanCancel: jest.fn() };

    const moduleRef = await Test.createTestingModule({
      providers: [
        ReservationsService,
        { provide: getRepositoryToken(ReservationEntity), useValue: reservationsRepositoryMock },
        { provide: getRepositoryToken(RoomEntity), useValue: roomsRepositoryMock },
        { provide: ReservationRulesService, useValue: reservationRulesServiceMock },
      ],
    }).compile();
    service = moduleRef.get(ReservationsService);
  });

  it('cancels an active reservation and returns the saved result', async () => {
    const reservation = {
      id: 7,
      purpose: 'Project planning',
      participants: 6,
      status: 'active',
      room: { id: 1, name: 'Room A' },
    } as ReservationEntity;
    const savedReservation = { ...reservation, status: 'cancelled' } as ReservationEntity;

    // TODO TEST 2: Arrange dependencies, call cancel(7), and check the required behavior.
    it('cancels and saves the reservation', async () => {
  const active = { id: 1, purpose: 'Test', participants: 3, status: 'active' } as any;
  const cancelled = { ...active, status: 'cancelled' };

  repositoryMock.findOne.mockResolvedValue(active);
  rulesMock.ensureCanCancel.mockReturnValue(undefined);
  repositoryMock.save.mockResolvedValue(cancelled);

  const result = await service.cancel(1);

  expect(rulesMock.ensureCanCancel).toHaveBeenCalledWith(active);
  expect(repositoryMock.save).toHaveBeenCalledWith(
    expect.objectContaining({ status: 'cancelled' }),
  );
  expect(result).toBe(cancelled);
});
    throw new Error('TODO TEST 2: complete the successful cancellation test');
  });

  it('does not change or save a reservation when the rule rejects cancellation', async () => {
    const reservation = {
      id: 9,
      purpose: 'Team review',
      participants: 4,
      status: 'active',
      room: { id: 2, name: 'Room B' },
    } as ReservationEntity;

    // TODO TEST 3: Make the mock rule reject this ACTIVE reservation, as requested.
    // Check the exception, the unchanged state, and the absence of a save() call.
    it('does not modify or save when the rule rejects', async () => {
  const active = { id: 1, purpose: 'Test', participants: 3, status: 'active' } as any;

  repositoryMock.findOne.mockResolvedValue(active);
  rulesMock.ensureCanCancel.mockImplementation(() => {
    throw new ConflictException();
  });

  await expect(service.cancel(1)).rejects.toThrow(ConflictException);

  expect(active.status).toBe('active');
  expect(repositoryMock.save).not.toHaveBeenCalled();
});
    throw new Error('TODO TEST 3: complete the rejected cancellation test');
  });
});
