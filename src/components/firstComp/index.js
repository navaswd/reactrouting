import React from 'react';
import './style.css';

export default class FirstComp extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.testsubmit}>
                    <label>
                        Pick your favorite flavor:
                         <select value={this.props.testpropsvalue} onChange={this.props.testevent}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
