import React, { Component } from 'react';
import './AddBoiler.css'

export class AddBoiler extends Component {
    state = {
        typeId:'',
        maintaince_rate:'',
        hour_maintaince_cost:'',
        hour_eventual_cost:''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addBoiler(this.state);
        this.setState({
            typeId:'',
            maintaince_rate:'',
            hour_maintaince_cost:'',
            hour_eventual_cost:''
        });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex', paddingTop: '20px' }} >
                <input 
                    type="text" 
                    name="typeId" 
                    style={{flex: '1', padding: '3px'}} 
                    placeholder="Add Type ID..." 
                    value={this.state.typeId}
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="maintaince_rate" 
                    style={{flex: '1', padding: '3px'}}  
                    placeholder="Add Maintaince Rate:..." 
                    value={this.state.maintaince_rate}
                    onChange={this.onChange}
                />
                <input 
                    type="text, number" 
                    name="hour_maintaince_cost" 
                    style={{flex: '1', padding: '3px'}} 
                    placeholder="Add Hour Maintaince Cost..." 
                    value={this.state.hour_maintaince_cost}
                    onChange={this.onChange}
                />
                <input 
                    type="text, number" 
                    name="hour_eventual_cost" 
                    style={{flex: '1', padding: '3px'}} 
                    placeholder="Add Hour Eventual Cost..." 
                    value={this.state.hour_eventual_cost}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{flex: '1'}} 
                />
            </form>
        )
    }
}

export default AddBoiler
