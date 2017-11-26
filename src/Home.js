import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={password:this.props.password,pattern:''};
    }
    componentWillReceiveProps(nextProps){
        this.setState({password:nextProps.password})
    }
    render() {
        return (
            <div>
                <Search/>
            </div>
        );
    }

}
export default Home;