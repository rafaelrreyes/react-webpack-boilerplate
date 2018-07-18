import React, { Component } from "react";

const StatelessView = (props) => {
    return (
        <div>Here is the data from parent: {JSON.stringify(props.data)}</div>
    )
}

export default StatelessView;