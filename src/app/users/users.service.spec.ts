import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FAKE_USERS } from './users-fake.spec';
import { UsersProxyService } from './users-proxy.service';
import { User } from './users.model';
import { UsersService } from './users.service';


describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should adapt userDTto User', () => {
    const spyService = spyOn(TestBed.inject(UsersProxyService), 'getUsers').and.callFake(() => of(FAKE_USERS));

    service.getUsers().subscribe((users: User[]) => {
      expect(users[0].city).toEqual(FAKE_USERS[0].address.city);
      expect(users[0].email).toEqual(FAKE_USERS[0].email);
      expect(users[0].name).toEqual(FAKE_USERS[0].name);
      expect(users[0].phone).toEqual(FAKE_USERS[0].phone);
      expect(users[0].username).toEqual(FAKE_USERS[0].username);
    });

    expect(spyService).toHaveBeenCalled();
  });
});


