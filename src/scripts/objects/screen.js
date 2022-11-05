const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data"> 
                                            <h1>${user.name ?? 'não possui nome cadastrado 😢'}</h1>
                                            <p>${user.bio ?? 'não possui bio cadastrada 😢'}</p>
                                            <p>seguidores: ${user.followers ?? 'não há seguidores 😢'}</p> 
                                            <p>seguindo: ${user.following?? 'não há seguidores 😢' }</p>
                                        </div>
                                    </div>`
           
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li>
                                                                <a href="${repo.html_url}" target="_blank">${repo.name}<br>
                                                                forks: ${repo.forks ?? 'não há forks 😢'}<br>
                                                                estrelas: ${repo.stargazers_count ?? 'não há estrelas 😢'}<br>
                                                                watchers: ${repo.watchers ?? 'não há views 😢'}<br>
                                                                linguagem: ${repo.language ?? 'não definido'}
                                                                </a>
                                                                </li>`)
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section"> 
                                              <h2>Repositórios</h2>
                                              <ul>${repositoriesItens}</ul>
                                           </div>`
        }
        
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

