import React from "react";
import styled from "styled-components";

const Body = styled.div`
  background: url("https://images.unsplash.com/photo-1487782310695-ed8583618566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80")
    center / cover no-repeat;
  margin: 0;
  padding: 0;
  height: 100vh;
`;

const H1 = styled.h1`
  font-size: 100px;
`;

const Snow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100vh;
`;

const Snowflake = styled.p`
  display: inline-block;
  width: 0.1%;
  color: #fffafa;
  opacity: 0;
  font-size: 120px;
  margin: 0;
  padding: 0;
  animation: fall 16s linear infinite;

  @keyframes fall {
    0% {
      opacity: 0;
    }
    3% {
      opacity: 0.9;
    }
    90% {
      opacity: 0.9;
    }
    100% {
      transform: translate(0, 97vh);
      opacity: 0;
    }
  }
`;

const Snowflakes = () => {
  return (
    <Body>
      <H1>Snow</H1>
      <Snow>
        {[...Array(100)].map((_, i) => (
          <Snowflake key={i}>*</Snowflake>
        ))}
      </Snow>
    </Body>
  );
};

export default Snowflakes;
