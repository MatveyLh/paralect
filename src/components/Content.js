import React from "react";
import '../styles/content.css';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MicIcon from '@material-ui/icons/Mic';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    handleChange(event) {
        this.setState({search: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        const search = this.state.search.replace(" ","+");
        window.location.assign(`https://google.com/search?q=${search}`);
    }
    lucky() {
        window.location.assign('https://www.google.com/doodles/');
    }
    render() {
        return (
            <div className={'content'}>
                <img src={'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type={'text'} value={this.state.search} onChange={this.handleChange.bind(this)}/>
                    <SearchIcon onClick={this.handleSubmit.bind(this)} className={'search-btn'}/>
                    <KeyboardIcon className={'keyboard'}/>
                    <MicIcon className={'microphone'}/>
                </form>
                <div className={'content__search-buttons'}>
                    <button onClick={this.handleSubmit.bind(this)}>Поиск в Google</button>
                    <button onClick={this.lucky.bind(this)}>Мне повезет!</button>
                </div>
                <div className={'content__google-services'}>
                    <p>Сервисы Google доступны на разных языках: <a href={'#'}>English</a> <a href={'#'}>Беларуская</a></p>
                </div>
            </div>

        )
    }
}

export default Content;