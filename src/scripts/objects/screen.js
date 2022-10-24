//objeto screen/tela = exibir dados na tela
const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data"> 
                                            <h1>${user.name ?? 'não possui nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'não possui bio cadastrada 😢'}</p>
                                            <p>seguidores: ${user.followers}</p>
                                            <p>seguindo: ${user.following}</p>
                                        </div>
                                    </div>`
            //document.querySelector('.profile-data').innerHTML = userInfo
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)
        console.log(repositoriesItens)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section"> 
                                              <h2>Repositóriso</h2>
                                              <ul>${repositoriesItens}</ul>
                                           </div>`
        }

    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }