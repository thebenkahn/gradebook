import React, {Component} from 'react';

class Form extends Component {
  state = {
    gradeItemName: '',
    gradeItemPoints: '',
    gradeitemWeight: ''
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    }

render(){
  return (
    <form>
      <input name="gradeItemName" placeholder='Grade Item' value={this.state.gradeItemName} onChange={e => this.change(e)} />
      <br/>
      <input name="gradeItemPoints" placeholder='Point Value' value={this.state.gradeItemPoints} onChange={e => this.change(e)} />
      <br/>

      <br/>
      <button onClick={e => this.onSubmit(e)}>Submit</button>

    </form>
  )
}

}

export default Form;
