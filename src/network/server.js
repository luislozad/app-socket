const endpoints = [];

export function use(endpoint, controller) {
    endpoints.push({ endpoint, controller });
}

export function config(app) {
    endpoints.forEach(({ endpoint, controller }) => app.use(endpoint, controller));
}