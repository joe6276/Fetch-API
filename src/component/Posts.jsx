import React, { Component } from 'react'
import axios  from 'axios'

export default class posts extends Component {


    constructor(props){
        super(props)

        this.state={
            posts:[],
            post: null
        }
    }


    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState({
                posts: response.data
            })
            console.log(response)
        })
    }

    getAPost = (id) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response=>{
                this.setState({
                    post: response.data
                })
            console.log(response)
        })
    }
    render() {
   const {posts}= this.state;

        return (
        <div>
             <h1>List of Posts </h1>
             {
                 posts.map(post=>
                    <div key={post.id}>
                        <h2 onClick={() => this.getAPost(post.id)}>{post.title}</h2>
                    </div>
                    )
             }
        </div>
        )
    }
}

