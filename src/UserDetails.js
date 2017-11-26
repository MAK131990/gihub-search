import React from 'react';
import ReactDOM from 'react-dom';
import InfoCard from './InfoCard';
import './css/main.css';

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }
    backClicked(){
        let x = {};
        this.props.changeUser(x);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ user: nextProps.userObj})
    }
    render() {
        if (Object.keys(this.state.user).length !== 0 && this.state.user.constructor === Object) {
            let loginName = this.state.user.login[0].toUpperCase() + this.state.user.login.slice(1);
            return (
                <div className='user card'>
                    <div style={{
                        width: '20%', height: '100%', display: 'inline-block', textAlign: 'center',
                        verticalAlign: 'top', backgroundColor: '#000', color: 'gray', boxShadow: '#888888 5px 0px 30px'
                    }}>
                        <div style={{ overflow: 'hidden', marginRight: '5%' }}>
                            <img src={this.state.user.avatar_url} />
                        </div>
                        <div style={{ fontSize: '1.625em', lineHeight: '1.875em' }}>{loginName}</div>
                        <div>Id:{this.state.user.id}</div>
                        <div>Score:{this.state.user.score}</div>
                        <div>User Type:{this.state.user.type}</div>
                    </div>
                    <div className='userDetails'>
                        <div onClick={this.backClicked.bind(this)} style={{paddingTop:'1%', display: 'block', backgroundColor: '#000', color: 'gray',width:'100%',height:'5%',cursor:'pointer' }}>Home</div>
                        <div className='userDetails2'>
                            <div><InfoCard title='Gravatar Id' detail={this.state.user.gravatar_id} /> </div>
                            <div><InfoCard title='URL' detail={this.state.user.url} /></div>
                            <div><InfoCard title='HTML URL' detail={this.state.user.html_url} /></div>
                            <div><InfoCard title='Followers' detail={this.state.user.followers_url} /></div>
                            <div><InfoCard title='Following' detail={this.state.user.following_url} /></div>
                            <div><InfoCard title='Gists' detail={this.state.user.gists_url} /></div>
                            <div><InfoCard title='Starred' detail={this.state.user.starred_url} /></div>
                            <div><InfoCard title='Subscriptions' detail={this.state.user.subscriptions_url} /></div>
                            <div><InfoCard title='Organizations' detail={this.state.user.organizations_url} /></div>
                            <div><InfoCard title='Repos' detail={this.state.user.repos_url} /></div>
                            <div><InfoCard title='Received Events' detail={this.state.user.received_events_url} /></div>
                            <div><InfoCard title='Site Admin' detail={this.state.user.site_admin.toString()} /></div>
                        </div>
                    </div>
                </div>
            );
         }
        else {
            return <div style={{display:'none'}}></div>
        }
    }

}
export default UserDetails;