import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';

class InfoCard extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(nextProps){
    }
    render() {
        return (
            <div className='infouser'>
                <div style={{margin:'5%',color:'#0366d6',textAlign:'left'}}>{this.props.title}</div>
                <div style={{textAlign:'center'}}>{this.props.detail?this.props.detail:'None'}</div>
            </div>
        );
    }

}
export default InfoCard;