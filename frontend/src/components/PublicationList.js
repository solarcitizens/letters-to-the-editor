import React from 'react';


const PublicationList = props => (
  <div className="fields">{props.publications.map(title =>
    <label className="checkbox" key={title}><input key={title} type="checkbox" onChange={event => props.onChange(event, title)}/>
    {title}</label>)}</div>
);

PublicationList.propTypes = {
  publications: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default PublicationList;
