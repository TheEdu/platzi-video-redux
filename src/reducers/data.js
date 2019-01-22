const data = (state, action) => {
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
            
            // // Another Way
            // let results = []
            // categories.map( category => {
            //     results = results.concat(category.playlist)
            // })
            
            // results = results.filter( item => {
            //     const author = item.author.toLowerCase()
            //     return author.includes(query)
            // })

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