import React from 'react';

function Header(){
    console.log("Header compoment is redered!")
    return <h1>Header</h1>
}


export default React.memo(Header)