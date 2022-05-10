const apiHost =  "https://rickandmortyapi.com/api/"

export default { 
    async fetch(route: string) {
        try {
            const response = await fetch(apiHost + route)
            const responseJson = await response.json()
            return responseJson.results
        } catch(er) { console.log(er)}
    } ,

    async fetchEpisode(url: string) {
        try {
            const response = await fetch(url)
            const responseJson = await response.json()
            return responseJson
        } catch(er) { console.log(er)}
    } 
}



