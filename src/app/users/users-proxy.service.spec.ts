import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FAKE_USERS } from './users-fake.spec';
import { UsersProxyService } from './users-proxy.service';


describe('UsersProxyService', () => {
  let service: UsersProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersProxyService);
  });

  it('should be created', () => {
    // const service: UsersProxyService = TestBed.get(UsersProxyService);
    expect(service).toBeTruthy();
  });

  it('should call to server to get users', () => {
    // const service: UsersProxyService = TestBed.get(UsersProxyService);
    const httpMock = TestBed.inject(HttpTestingController);
    service.getUsers().subscribe(users => expect(users).toBe(FAKE_USERS));

    const request = httpMock.expectOne('http://localhost:3001/api/public/users');

    expect(request.request.method).toEqual('GET');
    request.flush(FAKE_USERS);
    httpMock.verify();
  });
});
