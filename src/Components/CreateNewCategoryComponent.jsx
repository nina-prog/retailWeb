import React, {Component } from 'react'
import UserService from '../API/UserService.js'

/**
 * This component enables the user to create a new category for a product 
 */

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

    /**
     * Method which handles changes 
     *  @param {event} event event if something changes 
     */

    handleChange (event) {
        this.setState({
            [event.target.name]
                :event.target.value
        })
    }
    /**
     * Method which handles if new category is clicked
     * @param {event} event event if new category is etablished 
     */
    handleClickNewCategory (event) {
        this.setState({ isNewCategoryClicked: true })
    }

    /**
     * Method which creates a new product category
     * @param {event} event event if new product category is created 
     */

    createNewCategory (event) {
        UserService.createCategories(this.state.catname)
            .then(response => {
                console.log(response.headers)
                alert("New Category created!")
                window.location.reload(false);
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