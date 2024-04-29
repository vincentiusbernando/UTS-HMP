import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TambahPage } from './tambah.page';

describe('TambahPage', () => {
  let component: TambahPage;
  let fixture: ComponentFixture<TambahPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
