import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Items.css';
import { BiPencil } from 'react-icons/bi';
import { FcCancel } from 'react-icons/fc';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';

export class Items extends Component {
    state = {...this.props.boil, isEditing: false};
    
    ulStyle = () => {
        return {
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            backgroundColor: 'rgb(239,232,216)'
        }
    }
    liStyle = () => {
        return {
            float: 'left',
            display: 'block',
            width: '17%',
            color: 'rgb(0,0,0)',
            fontWeight: 600,
            fontSize: 13,
            textAlign: 'center',
            padding: '16px 10px 16px',
            borderBottom: '1px solid #333',
        }
    }
    toggleEdit = () => {
        this.setState( { isEditing: !this.state.isEditing } );
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    saveChanges = () => {
        this.toggleEdit();
        this.props.updateBoiler(this.state);
    }
    render (){
        const { id } = this.props.boil;
        if (this.state.isEditing){
            return(
                <ul style={this.ulStyle()}>
                <input className="inputStyleEdt"
                        type="text" 
                        name="id" 
                        value={this.state.id}
                        readOnly
                    ></input>
                    <input className="inputStyleEdt"
                        type="text" 
                        name="typeId" 
                        placeholder=" Add Type Id"
                        value={this.state.typeId.isRequired}
                        onChange={this.onChange}
                    ></input>
                    <input className="inputStyleEdt"
                        type="text" 
                        name="maintaince_rate" 
                        placeholder=" Add Maintaince Rate"
                        value={this.state.maintaince_rate.isRequired}
                        onChange={this.onChange}
                    ></input>
                    <input className="inputStyleEdt"
                        type="number" 
                        name="hour_maintaince_cost" 
                        placeholder=" Add Hour Maintaince Cost"
                        value={this.state.hour_maintaince_cost.isRequired}
                        onChange={this.onChange}
                    ></input>
                    <input className="inputStyleEdt"
                        type="number" 
                        name="hour_eventual_cost" 
                        placeholder=" Add Hour Eventual Cost"
                        value={this.state.hour_eventual_cost.isRequired}
                        onChange={this.onChange}
                    ></input>
                    <div>
                        <button onClick={this.toggleEdit} style={Btn}><FcCancel /></button>
                        <button onClick={this.saveChanges} style={Btn}><AiOutlineCheckCircle/></button>
                    </div>
                    </ul>
            )
        }
        return (
        <ul style={this.ulStyle()}>
            <li style={this.liStyle()}>{ this.props.boil.id }</li>
            <li style={this.liStyle()}>{ this.props.boil.typeId }</li>
            <li style={this.liStyle()}>{ this.props.boil.maintaince_rate }</li>
            <li style={this.liStyle()}>${ this.props.boil.hour_maintaince_cost }</li>
            <li style={this.liStyle()}>${ this.props.boil.hour_eventual_cost }</li>
            <div>
                <button onClick={this.props.delBoiler.bind(this, id)} style={Btn}><GoTrashcan/></button>
                <button 
                onClick={this.toggleEdit} 
                style={Btn}><BiPencil/></button>
            </div>    
        </ul>
        )
    }
}
Items.propTypes = {
    boil: PropTypes.object.isRequired
}
const Btn = {
    backgroundColor: 'rgb(239,232,216)',
    border: 'none',
    width: '50px',
    height: '50px',
    padding: '10px',
    cursor: 'pointer',
    borderRadius: '50%',
    float: 'right',
    marginLeft: '8px',
    marginRight: '12px',
    marginTop:'5px' 
}
export default Items