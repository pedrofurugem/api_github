//busca os dados do usuário
import { baseUrl } from '/src/scripts/variables.js'

//busca usuário
async function getUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export { getUser }