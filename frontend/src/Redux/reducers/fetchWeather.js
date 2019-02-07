const fetchWeather = (state = {isFectching : false , weather :[]}, action) => {
    switch (action.type) {
        case 'FETCH_CURRENT_WEATHER':
            return{
                isFectching:true,
                weather : action.data
            }

        default:
        return state;
    }
}

export  default fetchWeather;