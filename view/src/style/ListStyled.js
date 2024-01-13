import styled from "styled-components";

const  ListStyled = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 5px;
  &:last-child{
    margin-right: 0;
  }
  .nav_button{
    &:active{
      boxShadow: 'none';
      backgroundColor: '#0062cc'!important;
      borderColor: '#005cbf'!important;
    }
  }
  button{
    background: none;
    border: none;
    padding: 0;
    color: #fff;
    font-weight: bold;
  }
`;

export default ListStyled;