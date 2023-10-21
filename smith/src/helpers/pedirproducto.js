import MOCK_DATA from "../data/MOCK_DATA.JS"


export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve (MOCK_DATA)
        }, 2000)
    })
}