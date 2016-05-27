import React from 'react';


const PublicationList = props => (
  <div className="fields">{props.publications.map(title =>
    <label className="checkbox" key={title}><input key={title} type="checkbox" onChange={props.onChange}/>
    {title}</label>)}</div>
);

PublicationList.propTypes = {
  publications: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default PublicationList;
