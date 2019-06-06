import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class Title extends React.Component{

    handClickOnTitle(){
        alert('title is click')
    }

    render() {

        return <h1 onClick={this.handClickOnTitle}>小书</h1>
    }
}

class Header extends React.Component{

    // renderGoodWord(goodWord, badWord) {
    //     const isGoodWord = true
    //     return isGoodWord ? goodWord : badWord
    //
    // }

    render() {
        // const className = 'test'
        return <div>
            <Title/>
            <h2>this is header</h2>
        </div>
    }
}
class Main extends React.Component{

        render() {
            return <div>
                <h2>this is main</h2>
            </div>
        }
}
class Footer extends React.Component{
        render() {
            return <div>
                <h2>this is footer</h2>
            </div>
        }
}
class Index extends React.Component{
        render() {
            return <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        }
}
ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
