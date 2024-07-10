import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TambahDraftPage } from './tambah-draft.page';

describe('TambahDraftPage', () => {
  let component: TambahDraftPage;
  let fixture: ComponentFixture<TambahDraftPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahDraftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
