import React, { Component } from 'react'
import HomeLayout from './../components/home-layout';
import Categories from './../../categories/components/categories';
import Related from './../components/related';
import ModalContainer from './../../widgets/containers/modal';
import Modal from './../../widgets/components/modal';
import HandleError from './../../error/containers/handle-error';
import VideoPlayer from './../../player/containers/video-player';
import { connect } from 'react-redux';
import { List as list } from 'immutable';

class Home extends Component {
    state = {
        modalDisplay: false
    }

    handleModalToggle = (media) => {
        this.setState({
            modalDisplay: !this.state.modalDisplay,
            media: media
        })
    }

    render() {
        // const categories = this.props.data.categories
        const categories = this.props.categories
        return (
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories
                        categories = { categories }
                        handleOpenModal = { this.handleModalToggle }
                        search={ this.props.search }
                    />
                    {
                        // If ternario
                        this.state.modalDisplay &&
                        <ModalContainer>
                            <Modal 
                                handleClick={ this.handleModalToggle }
                            >
                                <VideoPlayer
                                    autoPlay={true}
                                    src={this.state.media.src}
                                    title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

const mapStateToProps = (state, props) => {

    const categoriesIds = state.get('data').get('categories')
    const categories = categoriesIds
                            .map((categoryId) => {
                                return state.get('data')
                                            .get('entities')
                                            .get('category')
                                            .get(categoryId)
                            })

    let searchResults = list()
    const search = state.get('data')
                        .get('search')

    if (search) {
        const mediaList = state.get('data')
                               .get('entities')
                               .get('media')
        searchResults = mediaList.filter((media) => {
            return media.get('author')
                        .toLowerCase()
                        .includes(search.toLowerCase()) 
        })
    }


    return {
        categories: categories,
        search: searchResults.toList()
    }
}

export default connect(mapStateToProps)(Home)
