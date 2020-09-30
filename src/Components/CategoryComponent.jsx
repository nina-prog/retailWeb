import React, {Component } from 'react'
import UserService from '../API/UserService.js'
import CreateNewCategoryComponent from './CreateNewCategoryComponent.jsx'

/**
 * This component is responsible for the information about the category of each product 
 */

class CategoryComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            isDataFetched: false
        }
        this.deleteCategoryClicked = this.deleteCategoryClicked.bind(this)
    }    
    componentDidMount(){
        UserService.getCategories()
            .then(response => this.handleSuccessfulResponse(response))
            .catch( () => alert("Pleas sign in with admin account! [API Error]"))
    }
    handleSuccessfulResponse(res) {
        this.setState({
            data: res.data,
            isDataFetched : true
        })
    }

    /**
     * This method is being called if a category of a specific product should be deleted 
     */
    deleteCategoryClicked(e){
        let id = e.currentTarget.value
        console.log(id)
        if (window.confirm(`Do you really want to delete Category ${id}?`)) {
            console.log("You pressed OK!");
            UserService.deleteCategories(id)
                .then(response => {
                    alert(`Category ${id} is deleted!`)
                    window.location.reload(false)
                })
                .catch(response => alert("An Error occured while deleting, please try again."))
          } else {
            console.log("You pressed Cancel!")
          }
    }
    render () {
        if (!this.state.isDataFetched) return null;
        return (
            <div> 
                <h1>Admin Page</h1>
                <CreateNewCategoryComponent />
                <div className="container">
                    <table className="table">
                    <thead>
                        <tr>
                            <th>CategoryId</th>
                            <th>Category Name</th>
                            <th>Delete?</th>
                        </tr>
                    </thead>
                        <tbody>
                            {
                                this.state.data.map(
                                cat =>
                                    <tr key={cat.categoryId}>
                                        <td>{cat.categoryId}</td>
                                        <td>{cat.catName}</td>
                                        <td><button type="button" value={cat.categoryId} className="btn btn-danger" onClick={this.deleteCategoryClicked}>delete Category</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
      }
  }



export default CategoryComponent;