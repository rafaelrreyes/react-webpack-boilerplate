import React, { Component } from "react";

const StatelessView = (props) => {

    const data = props.data;

    if (data.length > 0) {
        data.map((element) => {
            console.log(element);
        });
    } else {
        return <div>Loading...</div>;
    }
    return (
        <div>Here is the data from parent: {JSON.stringify(props.data)}</div>
    )
}

export default StatelessView;