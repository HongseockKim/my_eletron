import logo from "@image/logo.svg";
import HeaderStyle from "../style/HeaderStyle";
import LiCom from "./LiCom";

function NavCom() {

    const btnType = [
        {
            type: 'button',
            name:'TODO',
            onClick:() => {
                console.log('dqweqweqewqwe')
            }
        },
        {
            type: 'button',
            name:'portfolio',
            onClick:() => {
                console.log('dqweqweqewqwe')
            }
        },
    ];

    return(
        <HeaderStyle>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className="nav_el">
                <ul className="nav_list">
                    <LiCom list={btnType}></LiCom>
                </ul>
            </nav>
        </HeaderStyle>
    )
}

export default NavCom;