import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const History = (props) => {
    const [sign, text, num] = props.history;
    return (
        <div>
            <h2>History</h2>
            <hr />
            {

                sign && <div className={sign === "+" ? "itemsPlus" : "itemsMinus"}>
                    <p>{text}</p>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p style={{ marginRight: "15px" }}>{sign}{num}</p>
                        <FontAwesomeIcon className="icon-trash" icon={faTrash} />
                    </div>
                </div>
            }
        </div>
    );
};

export default History;