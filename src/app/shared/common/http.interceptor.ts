import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headers = req.headers;

        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', `Bearer ${environment.apiKey}`);
        headers = headers.set('X-GitHub-Api-Version', environment.apiKeyVersion);

        const modifiedReq = req.clone({ headers });

        return next.handle(modifiedReq);
    }
}
