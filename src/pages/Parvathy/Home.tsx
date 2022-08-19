import { Component } from "react";
import picture from "./pictures/catimg1.png";
import { connect } from 'react-redux';


interface Props {
    userDetails: any;
}

class Home extends Component<Props> {

    render() {

        return (
            <div>
                <h2 className="thirteen wide column">
                        {this.props.userDetails}
                </h2>
                {/* <h3 className="ui center aligned teal header">A room without books is like a body without a soul.</h3> */}
                <div className="ui image">
                    <img alt={ picture } src={ picture } />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        userDetails: state.userKey.name
    }
}

export default connect(mapStateToProps)(Home);