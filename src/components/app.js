import {Component, h} from 'preact';

import FormState from './form-state';
import User from './user';
import 'styles/app.scss';
/**
 * Stateful component.
 */

export default class extends Component{

  constructor(props){
    super(props);
    this.state = {
      user:null,
      loading:true
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/afeiship')
      .then(resp=>resp.json())
      .then(user=>{
        this.setState({
          user,
          loading:false
        })
      }).catch(err=> console.log(err));
  }

  render(props){
    return <div className="app">
      <h1>Hello user.</h1>
      <FormState />
      {
        this.state.loading ?  <p>Please wating..</p> : <User pic={this.state.user.avatar_url} desc={this.state.user.name} />
      }
    </div>
  }
};
