import React from 'react'

class Essay extends React.Component{
 constructor(props){
    super(props)
    this.state = {value: ""}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
 }

    handleChange(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event){
        alert("ваш ответ получен" + this.state.value);
        event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    что значит для тебя эта вселенная?
                    <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                </label>
                <input 
                type = "submit" 
                value="Отправить">

                </input>
            </form>
        )
    }

}


export default Essay