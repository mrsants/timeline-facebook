import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 20px 20px 0 0px;
  display: flex;
`;

export const CommentAvatar = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

export const CommentContent = styled.div`
  padding: 15px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  margin-left: 10px;
  border-radius: 10px;
  width: 100%;
`;

export const Text = styled.p`
  width: 85%;
  font-weight: 400;
  color: #3e3e3e;
  font-size: 13px;
`;
