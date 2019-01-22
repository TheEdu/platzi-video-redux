import normalizedData from './../schemas'

const initialState = {
    entities: normalizedData.entities,
    categories: normalizedData.result.categories,
    search: [],
}

const data = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_VIDEO': {
            const query = action.payload.query.toLowerCase()
            const categories = state.data.categories

            let results = []
            
            query &&
            categories
                .map( cat => cat.playlist
                                .filter( media =>
                                            media.author.toLowerCase().includes(query) 
                                            && results.push(media)
                                        )
                    )
            return {
                ...state,
                search: results
            };
        }
        default:
            return state;
    }
}

export default data;