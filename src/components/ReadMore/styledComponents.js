import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: white;
  height: 100vh;
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: #1e293b;
  font-weight: 500;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #334155;
  font-weight: 500;
  width: 500px;
  text-align: center;
`
export const Image = styled.img`
  height: 300px;
  width: 500px;
`

export const Button = styled.button`
  background-color: #1f81ff;
  font-family: 'Roboto';
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  border-width: 0px;
  color: white;
  cursor: pointer;
`
