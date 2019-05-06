import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' ;
import { actionCreators } from './redux/actionCreators' ;
import Title from './components/Title'
import Input from './components/Input'
import List from './components/List'
import Footer from './components/Footer'

class TodoListApp extends Component {

  addItem = (item) => {
    this.props.addItem(item) 
  }

  removeItem = (index) => {
    this.props.removeItem(index) 
  }

  toggleItemCompleted = (index) => {
    this.props.toggleItemCompleted(index) 
  }

  removeCompleted = () => {
    this.props.removeCompleted()
  }

  render() {
    const {items} = this.props ; 
    
    return (
      <View style={styles.container}>
        <Title> Todo List </Title>
        <Input
          placeholder={'Enter an item!'}
          onSubmit={this.addItem}
        />
        <View style={styles.divider}/>
        <List
          items={items}
          onRemoveItem={this.removeItem}
          onToggleItemCompleted={this.toggleItemCompleted}
        />
        <View style={styles.divider} />
        <Footer onRemoveCompleted={this.removeCompleted} />
      </View>
    )
  }
}
const mapStateToProps = (state) => ({
  items: state.items,
}) 

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators,dispatch) ;
} 
export default connect(mapStateToProps,mapDispatchToProps)(TodoListApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke',
  },
})

