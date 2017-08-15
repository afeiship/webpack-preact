export default class {
  onChangeToState(inField, inEvent) {
    console.log('trigger on change to state..');
    this.setState({
      [inField]: inEvent.target.value
    })
  }
}
