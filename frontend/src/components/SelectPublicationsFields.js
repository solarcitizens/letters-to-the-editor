import React from 'react';
import PublicationList from './PublicationList';
import publicationService from '../services/publicationService';

const noPostCodeMessage = <div>Please select a post code in order to view a list of publications.</div>;

class SelectPublicationsFields extends React.Component {
  constructor(props) {
    super(props);
    this.fetchPublications = this.fetchPublications.bind(this);
    this.state = {
      publicationList: [],
    };
  }

  componentWillReceiveProps(prop) {
    if (prop.postCode && prop.postCode.length === 4) {
      this.fetchPublications(prop.postCode);
    }
  }

  fetchPublications(postCode) {
    publicationService.fetchPublicationsFor(postCode)
      .then(publications => {
        this.setState({ publicationList: publications });
      });
  }

  render() {
    return (
      <fieldset>
        <legend>
          <h5>Select Your Publications</h5>
        </legend>
        {!this.props.postCode || this.props.postCode.length !== 4
          ? noPostCodeMessage
          : <PublicationList publications={this.state.publicationList} onChange={this.props.onChange}/>}
      </fieldset>
    );
  }
}

SelectPublicationsFields.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  postCode: React.PropTypes.string,
};

export default SelectPublicationsFields;
