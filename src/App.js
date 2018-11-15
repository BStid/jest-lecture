import React, { Component } from 'react';
import Modal from './Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      isChecked: false
    };
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  onChange = () => this.setState({ isChecked: !this.state.isChecked });

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <button onClick={this.toggleModal}>Toggle Menu</button>
        {showModal ? (
          <Modal>
            <h1>Would you like to adopt a puppy?</h1>
            <div className="buttons">
              <button onClick={this.toggleModal}>Yes</button>
              <button onClick={this.toggleModal}>No</button>
            </div>
          </Modal>
        ) : null}

        <label>
          <input type="checkbox" checked={this.state.isChecked} onChange={this.onChange} />
          {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
        </label>
      </div>
    );
  }
}

export default App;
