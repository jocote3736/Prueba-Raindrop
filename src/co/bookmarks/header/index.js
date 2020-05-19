import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as bookmarksActions from '~data/actions/bookmarks'
import * as collectionsActions from '~data/actions/collections'
import { makeSelectMode, makeSort, makeSorts, getSearchEmpty, makeStatus } from '~data/selectors/bookmarks'
import { makeCollection } from '~data/selectors/collections'

import View from './view'
import SelectMode from './selectMode'

class BookmarksHeader extends React.Component {
    static defaultProps = {
        cid: 0,
        compact: false
    }

    render() {
        let Component

        if (this.props.selectMode.enabled)
            Component = SelectMode
        else
            Component = View

        return (
            <Component {...this.props} />
        )
    }
}

export default connect(
	() => {
        const getCollection = makeCollection()
        const getSelectMode = makeSelectMode()
        const getSort = makeSort()
        const getSorts = makeSorts()
        const getStatus = makeStatus()
    
        return (state, { cid })=>{
            return {
                status: getStatus(state, cid),
                selectMode: getSelectMode(state, cid),
                collection: getCollection(state, cid),
                sort: getSort(state, cid),
                sorts: getSorts(state, cid),
                isSearching: !getSearchEmpty(state, cid)
            }
        }
    },
	(dispatch)=>({
        actions: bindActionCreators(bookmarksActions, dispatch),
        collectionsActions: bindActionCreators(collectionsActions, dispatch)
    })
)(BookmarksHeader)