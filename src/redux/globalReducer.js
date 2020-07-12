
import axios from 'axios';
//mendefinisikan actiontype apa saja yang bisa digunakan supaya nilainya menjadi dinamis
const actionType = {
    API_GET_NEWS: 'API_GET_NEWS',
}

//proses pendefinisian state awal agar tidak undefined

// const isiDariApi = () => {
//     axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=49519f79b6ae41dfa2b999161f225169')
//         .then(response => {
//             this.setState({ dataArtikel: response.data.articles })

//         })
// }


const globalState = {
    dataNews: []

}






// reducer itu berupa function yg memiliki 2 paramter yaitu state dan action 
const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case actionType.API_GET_NEWS:
            return {
                dataNews: action.value
            }
    }

    return state
}

export default rootReducer;