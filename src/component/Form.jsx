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
 handleSubmit= async (e)=>{
 e.preventDefault()


 const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    
    method: "POST",
    body: JSON.stringify({
        title:this.state.title,
        body: this.state.body,
        userId: this.state.userId
    }),
     
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}
)
const json =  await response.json()
console.log(json)

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
            onChange={this.handleChange}>

             </input>
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
