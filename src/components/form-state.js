import {Component, h} from 'preact';

import linkState from 'linkstate';
import onChangeMixin from 'components/mixins/on-change';

@mixin(onChangeMixin)
export default class extends Component {

  _click = e => {
    console.log('click!');
    this.onChangeToState('btn', e);
  };

  data() {
    return 'data';
  }

  render() {
    return (
      <div className="test-form">
        <input type="text" onInput={linkState(this, 'text')}/>
        <p><img src={require('images/code.png')} width="400"/></p>
        <button value="test" onClick={this._click}>Test Click (Mixin)</button>
        <pre>
          <code>
            { JSON.stringify(this.state, null, 4)}
          </code>
        </pre>
      </div>
    )
  }
}
