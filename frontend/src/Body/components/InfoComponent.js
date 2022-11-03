import React from "react";

function InfoComponent(prop) {

    return (
        <h2 id='info'>{prop.text}</h2>
    )
}
export default React.memo(InfoComponent)