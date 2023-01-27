// import React from 'react'

// class NameForm extends React.Component{
//  constructor(props){
//     super(props)
//     this.state = {value: "warcraft"}

//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//  }

//     handleChange(event){
//         this.setState({value: event.target.value})
//     }
//     handleSubmit(event){
//         alert("ваш персонаж выбран:" + this.state.value);
//         event.preventDefault()
//     }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Выберите ваш любимый персонаж:
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="invoker">Kael</option>
//                         <option value="Axe">Axe</option>
//                         <option value="Storm">Storm Spirit</option>
//                         <option value="Ember Spirit">Ember Spirit</option>
//                     </select>
//                 </label>
//                 <input 
//                 type = "submit" 
//                 value="Отправить">

//                 </input>
//             </form>
//         )
//     }

// }


// export default NameForm