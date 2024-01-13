import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #6728ff;

  .logo {
    max-width: 65px;
    width: 100%;
    margin-right: 20px;

    img {
      width: 100%;
    }
  }
  .nav_list{
    display: flex;
  }
  
`;

export default HeaderStyle;