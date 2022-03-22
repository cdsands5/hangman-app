const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
   
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    }else {
        throw new Error('Unable to get puzzle')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return  getCountry(location.country)
    
}

const getCountry =  async (countryCode) => {
    const response = await fetch('//api.countrylayer.com/v2/all?access_key=765d240f256077f9adba5301005c184b')

    if(response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    }else {
        throw new Error('Unable to fetch data')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?6803cf50f6303b')
    
    if(response.status === 200) {
        return response.json()
    }else {
        throw new Error('Unable to fetch location')
    }
}




