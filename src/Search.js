import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import SearchResult from './SearchResult';
import UserDetails from './UserDetails';
import _ from 'lodash';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: '', selectedUser: {}, searchUser: {}, loaderVisible: false};
        this.delayedSearch = _.debounce(function (event) {
            this.searchUser(event)
        }, 2000);
    }
    componentWillReceiveProps(nextProps) {
    }
    userSelected(userObject) {
        this.setState({ selectedUser: userObject})
    }
    isSelectedUserEmpty() {
        return (Object.keys(this.state.selectedUser).length === 0 && this.state.selectedUser.constructor === Object)
    }
    searchQueryChanged(event) {
        if (event.target.value.length == 0) {
            this.setState({ query: event.target.value, selectedUser: {},searchUser: {} })
        }
        else {
            this.setState({ query: event.target.value,searchUser: {} })
        }
        event.persist();
        this.delayedSearch(event);
    }
    searchUser(event) {
        if (event.target.value.length >= 3) {
            let that = this;
            this.setState({ loaderVisible: true, selectedUser: {} })
            fetch('https://api.github.com/search/users?q=' + event.target.value).then(function (response) {
                return response.json();
            }).then(function (j) {
                that.setState({ searchUser: j, loaderVisible: false })

            });
        }
    }

    render() {
        let shouldDisplayResult;
        let inputStyle;
        let style1 = {
            marginTop: '20vh'
        }
        if(this.state.query!='' && this.isSelectedUserEmpty()){
            shouldDisplayResult =  '' 
        }
        else{
            shouldDisplayResult = 'none';
            style1.display='none'
        }


        inputStyle = this.state.query == ''? style1 : {};
        if(!this.isSelectedUserEmpty()){
            inputStyle.display='none'
        }
        else{
            inputStyle.display=''
        }
        return (
            <div>
                <input type="text" style={inputStyle} placeholder="Search..type 3+ characters" onChange={this.searchQueryChanged.bind(this)} />
                <UserDetails userObj={this.state.selectedUser} changeUser={this.userSelected.bind(this)} />
                <SearchResult loaderVisible={this.state.loaderVisible} userList={this.state.searchUser}
                     shouldDisplay={shouldDisplayResult} changeUser={this.userSelected.bind(this)} />
            </div>
        );
    }

}
export default Search;