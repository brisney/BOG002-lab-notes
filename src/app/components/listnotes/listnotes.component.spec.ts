import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.services/auth.service';
import { NotesService } from 'src/app/notes.services/notes.service';

import { ListnotesComponent } from './listnotes.component';

fdescribe('ListnotesComponent', () => {
  let component: ListnotesComponent;
  let fixture: ComponentFixture<ListnotesComponent>;
  
  class AuthServiceStub {}
  class NoteServiceStub {}

  let RouterSpy: jasmine.SpyObj<Router>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListnotesComponent],
      providers: [
        { provider: AuthService, useClass: AuthServiceStub },
        { provider: Router, useValue: RouterSpy },
        { provider: NotesService, useClass: NoteServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
