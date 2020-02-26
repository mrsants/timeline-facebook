import React from "react";
import { Wrapper, CommentAvatar, CommentContent, Text } from "./styles";

export default function Comment({ avatar, name, content }) {
  return (
    <Wrapper>
      <CommentAvatar style={{ backgroundImage: `url('${avatar}')` }} />
      <CommentContent>
        <Text>
          {" "}
          <strong>{name}</strong> {content}
        </Text>
      </CommentContent>
    </Wrapper>
  );
}
