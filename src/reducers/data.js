import normalizedData from './../schemas'
import { fromJS } from 'immutable'

const initialState = fromJS({
    entities: normalizedData.entities,
    categories: normalizedData.result.categories,
    search: '',
})

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_VIDEO': {
            const query = action.payload.query
            return state.set('search', query)
            // const query = action.payload.query.toLowerCase()
            // const categories = state.data.categories

            // let results = []
            
            // query &&
            // categories
            //     .map( cat => cat.playlist
            //                     .filter( media =>
            //                                 media.author.toLowerCase().includes(query) 
            //                                 && results.push(media)
            //                             )
            //         )

            // return {
            //     ...state,
            //     search: results
            // }
        }
        default:
            return state;
    }
}

export default data;