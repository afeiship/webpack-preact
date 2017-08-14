import {Component, h} from 'preact';

import linkState from 'linkstate';

export default class extends Component {
  render(){
    return (
      <div className="test-form">
        <input type="text" name="" id="" onInput={linkState(this,'text')}/>
        <p><img src={require('images/code.png')} width="400" /></p>
        <pre>
          <code>
            { JSON.stringify(this.state,null,4)}
          </code>
        </pre>
      </div>
    )
  }
}
