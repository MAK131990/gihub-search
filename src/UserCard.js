import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

class UserCard extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(nextProps){
    }
    render() {
        return (
            <div className='singleuser' onClick={this.props.onClick}>
                <div style={{height:'80%'}}><img src={this.props.imgUrl}/></div>
                <div style={{textAlign:'center',marginTop:'5%'}}>{this.props.userName}</div>
            </div>
        );
    }

}
export default UserCard;