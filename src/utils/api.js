// const API_ID = process.env.REACT_APP_API_ID
// const APP_KEY = process.env.REACT_APP_APP_KEY

const API_ID = '1d467add'
const APP_KEY = 'ce4d48a6353c8c08574cdccf0847b630'

console.log(process.env)
console.log(API_ID)
console.log(APP_KEY)

export function fetchRecipes (food = '') {
    food = food.trim()

    return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
        .then((res) => res.json())
        .then(({ hits }) => hits.map(({ recipe }) => recipe))
}