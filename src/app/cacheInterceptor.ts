import { HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { HttpCacheService } from './cache.service';
@Injectable()
export class cacheInterceptor implements HttpInterceptor {
    constructor(private cacheService: HttpCacheService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("cache interceptor")
        const cachedResponse = this.cacheService[req.urlWithParams] || null;//check cachedResponse
        if (cachedResponse)//not null
        {
            console.log("respnse from cache")
            return Observable.of(cachedResponse)
        }
        return next.handle(req).do(event => {
            if (event instanceof HttpResponse) {
                console.log("respnse from server")
                this.cacheService[req.urlWithParams] = event;
                
            }
        })
    }
}