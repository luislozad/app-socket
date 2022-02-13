import { SuccessResponse, ErrorResponse, HttpError, HttpSuccess } from "./http";

export function success(req, res) {
    const http = new HttpSuccess();
    http.setRequest(req);
    http.setResponse(res);

    return new SuccessResponse(http);
}

export function error(req, res) {
    const http = new HttpError();
    http.setResponse(res);
    http.setRequest(req);

    return new ErrorResponse(http);
}