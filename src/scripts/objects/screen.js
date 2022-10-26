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
           
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                <a href="${repo.html_url}" target="_blank">${repo.name}<br>
                                                                forks: ${repo.forks}<br>
                                                                estrelas: ${repo.stargazers_count}<br>
                                                                watchers: ${repo.watchers}<br>
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
        //SOLICITAÇÃO 2
        const filtered = user.events.filter(f => f.type === 'PushEvent' ||  f.type === 'CreateEvent' && f.payload.commits === 'message')
        console.log(filtered)
    
        let eventsItens = ''
        filtered.forEach(e => eventsItens += `<li><a>${e.repo.name} - ${e.payload.commits[0].message}</a></li>`)
           
        if(user.events.length > 0){   
            this.userProfile.innerHTML +=   `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
        
        },
        renderNotFound(){
            this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
        }
}

export { screen }

