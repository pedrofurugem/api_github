import { getUser } from '/src/scripts/services/user.js'
import { getRepositories } from '/src/scripts/services/repositories.js'

import { user } from '/src/scripts/objects/user.js'
import { screen } from '/src/scripts/objects/screen.js'

document.getElementById('btn-search').addEventListener('click', ()=> {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return //se usuário existe
    getUserData(userName)
})

// validando a tecla ENTER
document.getElementById('input-search').addEventListener('keyup', (e)=> {
    const userName = e.target.value
    const key = e.which || e.keyCode //pegar o código da chave
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

//validação se usuário existe ou não
function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
}

async function getUserData(userName){
    
    const userResponse = await getUser(userName)
    
    if(userResponse.message === 'Not Found'){
        screen.renderNotFound()
        return
    }
    
    const repositoriesResponse = await getRepositories(userName)
    
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    
    screen.renderUser(user)

    //console.log(userResponse)
}
