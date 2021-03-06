import React, { Component } from "react";
import TodoList from './TodoList'
import TodoItems from './TodoItems'
import '../styles/App.css';

class App extends Component {
	inputElement = React.createRef()
	constructor(){
		super()
		this.state ={
			items: [],
			currentItem: {
				text: '',
				key: ''
			},
		}
	}
	
	handleInput = e => {
		const itemText = e.target.value
		const currentItem = {text: itemText, key: Date.now()}
		this.setState({currentItem,})
	}
	
	addItem = e =>{
		e.preventDefault()
		const newItem = this.state.currentItem
		if(newItem.text !== ''){
			const items = [...this.state.items, newItem]
			this.setState({
				items: items,
				currentItem: {text: '', key: ''},				
			})
		}
	}

    render() {
        return (
			<div className="App">
				<TodoList 
					addItem={this.addItem}
					inputElement={this.inputElement}
					handleInput={this.handleInput}
					currentItem={this.state.currentItem}
				/>
				<TodoItems entries={this.state.items}/>
			</div>
        )
    }
}

export default App;