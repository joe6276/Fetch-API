import axios from 'axios'
import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props){
        super(props)

        this.state ={
            userId:'',
            title:'',
            body:''
        }
    }
 handleChange=(e)=>{
     this.setState({
        [e.target.name]:e.target.value
     })
     
 }
 handleSubmit=(e)=>{
 e.preventDefault()
 axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response=>{
        console.log(response)
        })
 }
    render() {
        const{userId,title,body}= this.state;
        return (
            <div>

                <h1>Create a New post </h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label style={{ width:'100px', marginRight:'50px'}}>
                        User ID
                        </label>
                    <input
                    type="text"
                    name="userId"
                    value={userId}
                    onChange={this.handleChange}
                    ></input>
                    </div>
                    <br/>

                    <div >
                    <label style={{ width:'100px', marginRight:'70px'}}>
                        Title
                        </label>
                    <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={this.handleChange}
                    ></input>
                    </div>
<br/>
                    <div>
                    <label style={{ width:'50px', marginRight:'70px'}}>
                        Body
                        </label>

                    <input
                    type="text"
                    name="body"
                    value={body}
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
