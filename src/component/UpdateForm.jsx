import axios from 'axios'
import React, { Component } from 'react'

export default class UpdateForm extends Component {
    constructor(props){
        super(props)

        this.state ={
            postId:'',
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
    axios.put(`https://jsonplaceholder.typicode.com/posts/${this.state.postId}` , this.state)
           .then(response=>{
           console.log(response)
           console.log(response.data)
           })
    }
    render() {
        const{userId,postId, title,body}= this.state;
        return (
            
            <div>
                <h1>Update Existing post </h1>
                  <form onSubmit={this.handleSubmit}>
                  <div>
                    <label style={{ width:'100px', marginRight:'50px'}}>
                        PostID
                        </label>
                    <input
                    type="text"
                    name="postId"
                    value={postId}
                    onChange={this.handleChange}
                    ></input>
                    </div>
                    <br/>


                    <div>
                    <label style={{ width:'100px', marginRight:'50px'}}>
                        UserID
                        </label>
                    <input
                    type="text"
                    name="userId"
                    value={userId}
                    onChange={this.handleChange}
                    ></input>
                    </div>
                    <br/>
                    <div>
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
                    <label style={{ width:'100px', marginRight:'65px'}}>
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

                <button  style={{ width:'100px', marginRight:'50px'}} type='submit'>Update Post</button>
                </form>
            </div>
        )
    }
}
