import React, {Component} from 'react'

class Template extends Component {

  render() {
    <div>
      <header>
        <h1>TicTacTuring</h1>
      </header>
      <main>
        {this.props.children}
      </main>
    </div>
  }
}

export default Template
