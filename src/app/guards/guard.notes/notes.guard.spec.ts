import { TestBed } from '@angular/core/testing';

import { NotesGuard } from './notes.guard';

describe('NotesGuard', () => {
  let guard: NotesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
