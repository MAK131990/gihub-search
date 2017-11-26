import React from 'react';
import ReactDOM from 'react-dom';
import UserCard from './UserCard';
import './css/main.css';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldDisplay: '',
            resultSet: {}
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ shouldDisplay: nextProps.shouldDisplay, resultSet: nextProps.userList })
    }
    userClicked(clickedId) {
        let x = this.state.resultSet.items.filter(d => d.id == clickedId);
        this.props.changeUser(x[0]);
    }
    createSearchList() {
        if (Object.keys(this.state.resultSet).length !== 0 && this.state.resultSet.constructor === Object) {
            return this.state.resultSet.items.map((d, index) => <UserCard onClick={this.userClicked.bind(this, d.id)} key={index} imgUrl={d.avatar_url} userName={d.login} />)
        }
        else if(this.props.loaderVisible){
            return <img style={{width:'5%'}} src="/loader.gif"/>
        }
    }
    render() {
        let shouldDisplay = this.state.shouldDisplay.toString();
        let mystyle = {
            display: shouldDisplay,
        }
        return (
            <div className='searchListTable' style={mystyle}>
                {this.createSearchList()}
            </div>
        );
    }



}
export default SearchResult;