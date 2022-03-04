//You don't have to do anything here😃
const url = 'https://api.github.com/users/Pranav108/followers?per_page=100'

const fetchFollowers = async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export default fetchFollowers