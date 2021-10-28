import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const History = () => {
    return (
        <div>
            <h2>History</h2>
            <hr />
            <div className="items">
                <p>books</p>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ marginRight: "15px" }}>20</p>
                    <FontAwesomeIcon className="icon-trash" icon={faTrash} />
                </div>
            </div>
        </div>
    );
};

export default History;