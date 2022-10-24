//busca os repositórios
import { baseUrl, repositoriesQuantity } from '/src/scripts/variables.js'

//busca repositório
async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`) //buscando 10 repositorios
    return await response.json()
}

export { getRepositories }