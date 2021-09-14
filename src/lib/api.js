const BASE_URL = "https://dev.to/api/articles"

export default{
    
    async getAllArticles(){
        let result = await fetch(`${BASE_URL}/.json`)
        return await result.json()
    },
    
}