import { Test, TestingModule } from '@nestjs/testing';
import { EventiController } from './eventi.controller';

describe('EventiController', () => {
  let controller: EventiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventiController],
    }).compile();

    controller = module.get<EventiController>(EventiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
