import React, { Component } from 'react'
export default class posts extends Component {


    constructor(props){
        super(props)

        this.state={
            posts:[],
            post: null
        }
    }


    componentDidMount(){

        const getdata=async ()=>{
        
        const response =await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await response.json()
        this.setState({
                 posts:json
                })
        console.log(json)

        }
       getdata()
    }


    render() {
   const {posts}= this.state;

        return (
        <div>
             <h1>List of Posts </h1>
             {
                 posts.map(post=>
                    <div key={post.id}>
                       <h2>{post.title}</h2>
                    </div>
                    )
             }
        </div>
        )
    }
}

