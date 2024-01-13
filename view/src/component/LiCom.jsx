import ListStyled from "../style/ListStyled";
import {Button, ButtonGroup} from "@mui/material";

function LiCom({ list }) {
    console.log(list)
    return (
        list && list.length > 0 && list.map((btn) => {
            return (
                <ListStyled >
                        <Button className='nav_button' type={btn.type} onClick={btn.onClick} >{btn.name}</Button >
                </ListStyled >
            )
        })
    )
}

export default LiCom;