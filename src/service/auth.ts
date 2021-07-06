import { ResponseTypes } from "../types/Types"
export function signin(): Promise<ResponseTypes> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'dsdsdsdhsdklosjdçlskdslçdk,21l2ç3jk12lk3j1241',
                user: {
                    email: 'felipe@hotmail.com',
                    name: 'felipe',
                },
            })
        },1000)
    })
}