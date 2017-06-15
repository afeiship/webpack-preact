import {h} from 'preact';

/**
 * State less functional component. (SFC Compoentn)
 */

export default function(props){
  return <section>
    <img src={props.pic} alt=""/>
    <span>{props.desc}</span>
  </section>
}
