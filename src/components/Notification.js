import React from "react";
import {GiConfirmed} from "react-icons/gi"
import {BiError} from "react-icons/bi"

const errorStyle = {
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "Red",
    background: "transparent",
    width: "100%",
    textAlign: "center",
}

const confirmationStyle = {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "Green",
    background: "transparent",
    textAlign: "center",
}

const iconStyle = {
    fontSize: "25px",
    marginRight: "5px"
}

const wrapperStyle = {
    width: "100%",
    height: "30px"
}

const Notification = ({notification}) => {


    return (
        <div style={wrapperStyle}>

            {notification === null? null: 
            <div style={notification.positive? confirmationStyle: errorStyle}>
                {notification.positive? <GiConfirmed style={iconStyle}/>: <BiError style={iconStyle} />}
                <p>{notification.message}</p>
            </div>}
        </div>
    )

}

export default Notification