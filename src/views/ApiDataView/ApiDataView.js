import React, {
    Component,
    Children
} from 'react';
import {
    array
} from 'prop-types';
import {
    forEachChild
} from 'typescript';

class FetchConnectApi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jsonData: []
        }
    }

    myfunction(resposeData) {
        var objData = JSON.parse(this.state.jsonData);

        return 0;
    }
    componentDidMount() {
        fetch('https://www.reddit.com/r/futurology.json')
            .then(jsonData => {
                if (!jsonData.ok) {
                    throw Error("Network request failed")
                }
                return jsonData;
            })
            .then(data => data.json())
            .then(data =>
                this.setState({
                    jsonData: data.data
                }));
    }

    f_test() {
        if (typeof this.state.jsonData !== "undefined") {
            if (typeof this.state.jsonData.children !== "undefined") {
                const x = this.state.jsonData.children.map(c => c.data);
                var retVal = [];
                for (var i = 0; i < x.length; i++) {
                    var url = "https://www.reddit.com" + x[i].permalink;
                    var lineItem = ( <li> <a href={url}> {x[i].title}</a> </li>);
                        retVal.push(lineItem);
                    }
                    return retVal;
                }
            }
            return "fetching data from reddit.com";

        }
        render() {
            var x = this.f_test();

            if (this.state.requestFailed) return <p > Failed! < /p>
            if (!this.state.results)
                var x = this.f_test();
            return <ul> {x}

            </ul>
        }
    }
    export default FetchConnectApi;