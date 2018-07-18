import React, { Component } from "react";
import ReactDOM from "react-dom";

// import childviews
import StatelessView from "./client/js/StatelessView";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultData: {}
        };

        this.bindAFunction = this.bindAFunction.bind(this);
    }

    bindAFunction() {
        console.log(`function is binded`);
    }

    render() {
        return (
            <div>
                <StatelessView data={this.state.defaultData}/>
            </div>
        )
    }

    // do a api request on component lifecycle mount
    componentDidMount() {
        fetch('/api/data/get')
            .then((response) => {
                // return the data as json
                return response.json();
            })
            .then((response) => {
                // do stuff with data here
                if (response.success === "ok") {
                    let data = response.data;
                    // change state on data fetch
                    this.setState({
                        defaultData: data
                    });
                }
            });
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById("index")
);