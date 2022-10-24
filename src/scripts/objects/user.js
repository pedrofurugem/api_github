//objeto usuário, trazer informações do usuário
const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    followers: '',
    following: '',
    userName: '',
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url //imagem do usuário
        this.name = gitHubUser.name //nome completo do usuário
        this.bio = gitHubUser.bio  //bio
        this.followers = gitHubUser.followers //numero de seguidores
        this.following = gitHubUser.following             
        this.userName = gitHubUser.userName //login
    },
    
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export { user }