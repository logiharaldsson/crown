import React from 'react';
// Redux & Reselect
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
// Components
import CollectionPreview from '../collection-preview/collection-preview.component';
// Styles
import './collections-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
