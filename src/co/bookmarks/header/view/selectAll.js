import React from 'react'
import t from '~t'
import Icon from '~co/common/icon'

export default class BookmarksHeaderSelectAll extends React.Component {
    render() {
        const { collection, onSelectAllClick } = this.props

        if (!collection.count)
            return null

        return (
            <a href='' className='button default' onClick={onSelectAllClick}>
                <Icon name='select_all' />
                <span className='hide-on-small-body'>{t.s('select')} {t.s('all')}</span>
            </a>
        )
    }
}