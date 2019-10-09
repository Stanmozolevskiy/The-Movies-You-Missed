import http from "./http"

export function regester(user) {
    return http.post('http://localhost:3900/api/users', {
        name: user.name,
        email: user.email,
        password: user.password
    })
}
export function singnIn(user) {
    return http.post('http://localhost:3900/api/auth', {
        email: user.email,
        password: user.password
    })
}