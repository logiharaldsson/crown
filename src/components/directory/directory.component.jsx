import React from 'react';
// Redux & Reselect
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
// Components
import MenuItem from '../menu-item/menu-item.component';
// Styles
import './directory.styles.scss';

const Directory = ({ sections }) => {
  return (
      <div className='directory-menu'>
          {sections.map(({id, ...otherSectionProps}) => (
              <MenuItem key={id} {...otherSectionProps}/>
          ))}
      </div> 
  )
};

const mapStateToProps = createStructuredSelector ({
  sections: selectDirectorySections 
})

export default connect(mapStateToProps)(Directory);