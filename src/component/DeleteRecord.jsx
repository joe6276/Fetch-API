
import axios from 'axios'
import React, { Component } from 'react'

export default class DeleteRecord extends Component {
    constructor(props){
        super(props)

        this.state ={
            id:'',
            
        }
    }
    handleChange=(e)=>{
        this.setState({
           [e.target.name]:e.target.value
        })
        
    }
    handleSubmit=(e)=>{
    e.preventDefault()
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
           .then(response=>{
           console.log(response)
           })
    }

    render() {
        const {id}= this.state;
        
        return (
            <div>
                <h1>Delete A Post </h1>
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <div>
                    <label style={{ width:'100px', marginRight:'50px'}}>
                        PostID
                        </label>
                    <input
                    type="text"
                    name="id"
                    value={id}
                    onChange={this.handleChange}
                    ></input>
                    </div>
                    <br />
            
                <button type='submit'>DELETE A  POST </button>
                </form>
                
            </div>
        )
    }
}
