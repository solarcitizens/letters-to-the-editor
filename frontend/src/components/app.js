import React from 'react';
import LetterForm from './LetterForm';
import configService from '../services/configService';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderWithConfig = this.renderWithConfig.bind(this);
    this.renderWithoutConfig = this.renderWithoutConfig.bind(this);

    configService.getConfig(props.routeParams.campaignName)
      .then(config => (this.setState({ config })))
      .catch(error => (this.setState({ error })));
  }

  renderWithConfig() {
    return (
      <div className="lettersToTheEditor container">
        <div className="header">
          <img alt="Solar Citizens Logo" id="logo" src={`../images/${this.state.config.campaign.logo}`}/>
        </div>
        <div className="row">
          <div className="campaignTitle">
            <h1>{this.state.config.campaign.title}</h1>
          </div>
          <div className="campaignDescription">{this.state.config.campaign.description}</div>
          <div className="formContainer">
            <div className="formHeader">
              <h3>Take Action</h3>
              <div className="formTitle">Send Your Letter to Local Media</div>
            </div>
            <div className="arrowDown"/>
            <LetterForm
              config={this.state.config}
            />
          </div>
        </div>
      </div>
    );
  }

  renderWithoutConfig() {
    const loadOrError = this.state.error
      ? 'This campaign could not be found.  It may have ended.'
      : 'Loading...';

    return (<div className="row">{loadOrError}</div>);
  }

  render() {
    return (this.state.config) ? this.renderWithConfig() : this.renderWithoutConfig();
  }
}

App.propTypes = {
  routeParams: React.PropTypes.object.isRequired,
};

export default App;
