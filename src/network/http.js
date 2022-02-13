import createLogger from 'logging';

export class Logger extends createLogger {
    constructor(title) {
        super(title);
    }
}

export class Http {
    #response = null;
    #request = null;
    #status = 200;
    #errorTitle = '';
    #message = '';

    getErrorTitle() {
        return this.#errorTitle;
    }

    setErrorTitle(title) {
        this.#errorTitle = title;
    }

    getResponse() {
        return this.#response;
    }

    getRequest() {
        return this.#request;
    }

    getStatus() {
        return this.#status;
    }

    getMessage() {
        return this.#message;
    }

    setResponse(rep) {
        this.#response = rep;
    }

    setRequest(req) {
        this.#request = req;
    }

    setStatus(code) {
        this.#status = code;
    }

    setMessage(msg) {
        this.#message = msg;
    }
}

export class Response {
    #http = new Http();

    constructor(http) {
        this.#http = http;
    }

    status(num) {
        this.#http.setStatus(num);
        return this;
    }

    send(message) {
        this.#http.setMessage(message);
        this.#process();
        return this;
    }

    #process() {
        this.#http
            .getResponse()
            .status(this.#http.getStatus())
            .send({
                error: this.#http.getErrorTitle(),
                body: this.#http.getMessage()
            });
    }
}

export class HttpSuccess extends Http {
    constructor() {
        super();
        this.setStatus(200);
    }
}

export class HttpError extends Http {
    constructor() {
        super();
        this.setErrorTitle('Error');
        this.setStatus(500);
    }
}

export class SuccessResponse extends Response {
    constructor(http) {
        super(http);
    }
}

export class ErrorResponse extends Response {
    constructor(http) {
        super(http);
    }
}