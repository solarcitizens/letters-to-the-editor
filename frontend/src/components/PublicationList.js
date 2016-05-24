import React from 'react';


const PublicationList = props => (
  <ul>{props.publications.map(title => <div key={title}>{title}</div>)}</ul>
);

PublicationList.propTypes = {
  publications: React.PropTypes.array.isRequired,
};

export default PublicationList;
