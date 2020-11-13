import React, {Component} from 'react';
import './app.css';
var xhr;
class App extends Component{
    constructor(props){
        super(props)

        this.ajax = this.ajax.bind(this);
        this.ajaxRes = this.ajaxRes.bind(this);

        this.state ={
            newP:'Привет'
        }
    };

    ajax(){
        xhr = new XMLHttpRequest();
        xhr.open("GET","http://alexnoch-blog.ru/button/",true);
        xhr.send();
        xhr.addEventListener('readystatechange', this.ajaxRes,false);
    };
    ajaxRes(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var response = JSON.parse(xhr.responseText);
            this.setState({
                newP:response.header
            });
        }
    };

    render(){
        return(
        <div className="app_container">
            <h1>Заголовок нашего приложения</h1>
            <p>{this.state.newP}</p>
            <button onClick={this.ajax}>Кнопка</button>
        </div>
        )
    }
}
export default App;