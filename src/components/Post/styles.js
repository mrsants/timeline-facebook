import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 15px 0px #888888;
  margin-bottom: 30px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
`;


export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

export const AvatarInfo = styled.div`
  margin-left: 15px;

 h4 {
    color:#4A4A4A;
    font-weight: 900;
    font-size: 16px;
  }

  h5 {
    font-weight: 400;
    font-size: 12px;
    color: #9A9A9A;
  }
`;

export const Content = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid #EEEEEE;
  p {
    color: #3E3E3E;
    font-size: 14px;
  } 
`;
