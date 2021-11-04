import React from 'react';
import Flip from 'react-reveal/Flip';
const Header = () => {
    return (
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <br /><br /><br />
            <Flip>
                <h2><span style={{ color: "#a75265", fontSize: "40px" }}>JRana's</span> Expense Tracker.</h2>
            </Flip>
        </div>
    );
};

export default Header;