import React, {Component } from 'react'
import UserService from '../../API/todo/UserService.js'

class CreateNewCategoryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catname: 'Name',
            isNewCategoryClicked: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClickNewCategory = this.handleClickNewCategory.bind(this);
        this.createNewCategory = this.createNewCategory.bind(this)
    }
    handleChange (event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }
    handleClickNewCategory (event) {
        this.setState({ isNewCategoryClicked: true })
    }
    createNewCategory (event) {
        UserService.createCategories(this.state.catname)
            .then(response => {
                console.log(response.headers)
                alert("New User created!")
                /* window.location.reload(false); */
                })
            .catch(response => alert("An Error Occourt while creating the User! [API Error]"))
    }
    render () {
        return (
            <>
                <div className="container">
                    <button type="button" className="btn btn-primary mr-2 mb-2" onClick={this.handleClickNewCategory}>New Category</button>
                    {this.state.isNewCategoryClicked && <input type="text" name="catname" value={this.state.catname} onChange={this.handleChange}/>}
                    {this.state.isNewCategoryClicked && <button type="button" className="btn btn-success ml-2 mb-2" onClick={this.createNewCategory}>Create New Category</button>}
                </div>
            </>
        )
    }
}

export default CreateNewCategoryComponent;