import React, {Component} from 'react';
import Ninjas from './Ninjas';


class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }
    render() {
        return (
            <div className='addNinja'>
                <h2>Add new Ninja!</h2>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Enter Name:</label>
                    <input type='text' id='name' onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Enter Age:</label>
                    <input type='text' id='age' onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Enter belt</label>
                    <input type='text' id='belt' onChange={this.handleChange}/>
                </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;