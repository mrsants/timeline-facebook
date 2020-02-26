import React, { Component } from "react";
import Post from "../Post/index";
import { Root } from "./styles.js";



class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Marcelo Batista",
          avatar: "https://avatars1.githubusercontent.com/u/59406899?s=460&v=4"
        },
        date: "25 Fev 2020",
        content: "Pessoal, alguém sabe se Rockeseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            content:
              "A Rockeseat sempre está em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se voce tem vontade de ensinar gravando videos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <Root>
        {this.state.posts.map(post => (
          <Post
            key={post.id}
            avatar={post.author.avatar}
            name={post.author.name}
            date={post.date}
            content={post.content}
            comments={post.comments}
          />
        ))}
      </Root>
    );
  }
}

export default PostList;
