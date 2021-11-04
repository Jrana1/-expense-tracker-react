import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Zoom from 'react-reveal/Zoom';


const SingleHistory = ({ item, history, setAllInfo }) => {
    let d = new Date();
    const deleteHandler = () => {
        setAllInfo(history.filter(itm => itm.id !== item.id));
    }
    return (
        <Zoom top>
            <div className={item.sign === "+" ? "itemsPlus" : "itemsMinus"}>
                <p>{item.text}</p>
                <p>{d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()}</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ marginRight: "15px" }}>{item.sign}{item.num}</p>
                    <FontAwesomeIcon onClick={deleteHandler} className="icon-trash" icon={faTrash} />
                </div>

            </div>
        </Zoom>

    )
}

export default SingleHistory;

/**

 <div className={item.sign === "+" ? "itemsPlus" : "itemsMinus"}>
                    <p>{item.text}</p>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p style={{ marginRight: "15px" }}>{item.sign}{item.num}</p>
                        <FontAwesomeIcon className="icon-trash" icon={faTrash} />
                    </div>
 */