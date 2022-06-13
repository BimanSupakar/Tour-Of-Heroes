import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [MessageService] });
    service = TestBed.inject(MessageService);
    //service = TestBed.get(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('messages defaults to: []', () => {
    expect(service.message).toEqual([]);
  });

  // JUST TO TEST TEST IS FAILING
  // it("adds a message Fail ", () => {
  //   service.add("ABC");
  //   expect(service.message).not.toEqual(["ABC"]);
  // });

  it("adds a message By passing a message", () => {
    service.add("ABC");
    expect(service.message).toEqual(["ABC"]);
  });

  it("clears all messages Clear Message", () => {
    service.add("ABC");
    service.clear();
    expect(service.message).toEqual([]);
  });
});
