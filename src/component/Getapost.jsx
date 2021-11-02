
import React, { Component } from 'react'

export default class Getapost extends Component {
    constructor(props){
        super(props)

        this.state={
            id:'',
            post: null
        }
    }

    handleChange=(e)=>{
        this.setState({
           [e.target.name]:e.target.value
        })
        
    }
    handleSubmit= async (e)=>{
    e.preventDefault()
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
    const json =await response.json()
     console.log(json)
}

    render() {
        const {id}= this.state;
        return (
            <div>
                <h1>Get a Specific Post</h1>
                <form  onSubmit={this.handleSubmit}>
                <div>
                    <label style={{ width:'50px', marginRight:'70px'}}>
                        PostID 
                        </label>

                    <input
                    type="text"
                    name="id"
                    value={id}
                    onChange={this.handleChange}
                    ></input>


                    </div>
                        <br/>
                <button type='submit'>Submit</button>
                </form>       
            </div>
        )
    }
}
