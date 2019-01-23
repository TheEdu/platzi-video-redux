import React from 'react'
import Category from './category'
import './categories.css'
import Search from './../../widgets/containers/search'
import Media from './../../playlist/components/media'

function Categories(props) {
    return (
        <div className="Categories">
            <Search />
            {
                props.search.map((media) => {
                    return <Media
                                key={ media.get('id') }
                                { ...media.toJS() }
                            />
                })
            }
            { 
                props.categories.map((category) => {
                    return(
                      <Category 
                        key={ category.get('id') } 
                        { ...category.toJS() }
                        handleOpenModal = { props.handleOpenModal }
                      />
                    )
                })
            }
        </div>
    )
}

export default Categories