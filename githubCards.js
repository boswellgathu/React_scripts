// Write JavaScript here and press Ctrl+Enter to execute

const data = {
  "login": "boswellgathu",
  "id": 24463773,
  "avatar_url": "https://avatars0.githubusercontent.com/u/24463773?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/boswellgathu",
  "html_url": "https://github.com/boswellgathu",
  "followers_url": "https://api.github.com/users/boswellgathu/followers",
  "following_url": "https://api.github.com/users/boswellgathu/following{/other_user}",
  "gists_url": "https://api.github.com/users/boswellgathu/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/boswellgathu/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/boswellgathu/subscriptions",
  "organizations_url": "https://api.github.com/users/boswellgathu/orgs",
  "repos_url": "https://api.github.com/users/boswellgathu/repos",
  "events_url": "https://api.github.com/users/boswellgathu/events{/privacy}",
  "received_events_url": "https://api.github.com/users/boswellgathu/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Boswell Gathu",
  "company": null,
  "blog": "https://andela.com/",
  "location": "Kenya",
  "email": null,
  "hireable": null,
  "bio": "Software Developer @andela",
  "public_repos": 23,
  "public_gists": 2,
  "followers": 2,
  "following": 1,
  "created_at": "2016-12-08T21:04:10Z",
  "updated_at": "2017-08-23T06:01:33Z"
}

const Card = (props) => {
  return (
    <div style={{padding: 10, dispaly: 'inline-block'}}>
      <img src={props.user.avatar_url} alt="user_profile_img" height="75" width="75"/>
      <h4> {props.user.name} </h4>
      <p> {props.user.bio} </p>
    </div>
  );
}

const CardList = (props) => {
  return (
    <div>
      { props.users.map((user) => (
        <Card 
          user={user}
        /> 
        ))
      }
    </div>
  );
}

class AddUser extends React.Component {
  
  handleClick = () => {
    this.setState(() => (
      this.props.fetchData(this.props.username)
    ));
};
render() {
  return (
    <div>
      <input 
        type="text" 
        name="search" 
        placeholder="Search.."
        onChange={this.props.handleChange}
      />
      <button onClick={this.handleClick}> Search </button>
    </div>
  );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [data],
      username: ''
    } 
  }
  
  githubApi = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((user) => {
        const users = this.state.users.concat([user])
        this.setState({ users })
      })
  }
  
  onChange = (evt) => {
    this.setState({
      username: evt.target.value
    })
  }
  
  render() {
    return (
      <div>
        <AddUser handleChange={this.onChange} fetchData={this.githubApi} username={this.state.username}/>
        <CardList users={this.state.users} />
      </div>
    );
  }
}
  

ReactDOM.render(<App />, mountNode);