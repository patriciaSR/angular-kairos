import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtenemos el token
    const token = sessionStorage.getItem('token');
    // Importante: modificamos de forma inmutable, haciendo el clonado de la petición
    const authReq = req.clone(
      { headers: req.headers.set('Authorization', 'Bearer ' + token) }
    );
    // Pasamos al siguiente interceptor de la cadena la petición modificada
    return next.handle(authReq);
  }
}
