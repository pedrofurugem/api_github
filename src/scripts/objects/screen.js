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
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                <a href="${repo.html_url}" target="_blank">${repo.name}<br>
                                                                forks: ${repo.forks_count}<br>
                                                                estrelas: ${repo.stargazers_count}<br> 
                                                                watchers: ${repo.watchers_count}<br>
                                                                linguagem: ${repo.language}
                                                                </a>
                                                                </li>`)
        
        //console.log(repositoriesItens)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section"> 
                                              <h2>Repositórios</h2>
                                              <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        
        let eventsItens = ''

        user.events.forEach(e => eventsItens += `<li><a>${e.repo.name}/${e.payload.commits}</a></li>`)

        if(user.events.length > 0 ){
            this.userProfile.innerHTML +=  `<div class="events section">
                                             <h2>Eventos</h2>
                                             <ul>${eventsItens}</ul>
                                            </div>`
        }
        console.log(eventsItens)

    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }

/*
se tu observar esse array que retorna, nem todos payloads terão commits, nisso tu deve realizar um filtro
[Imagem]
a partir disso, poderá percorrer os commits e mostrar a mensagem de cada um
se atenta que ele é um array também
*/