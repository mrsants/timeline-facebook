import React from "react";
import Comment from "../Comment";
import { Wrapper, User, Avatar, AvatarInfo, Content } from "./styles";

export default function Post({ avatar, name, date, content, comments }) {
  return (
    <Wrapper>
      <User>
        <Avatar style={{ backgroundImage: `url('${avatar}')` }} />
        <AvatarInfo>
          <h4>{name}</h4>
          <h5>{date}</h5>
        </AvatarInfo>
      </User>
      <Content>
        <p>{content}</p>
      </Content>
      <>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            avatar={comment.author.avatar}
            name={comment.author.name}
            content={comment.content}
          />
        ))}
      </>
    </Wrapper>
  );
}
