import React, {Component } from 'react'
import UserService from '../API/UserService.js'
import{Link} from 'react-router-dom'

/**
 * This components is responsible to add filters 
 */

class FilterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            postalcode: 'postal code',
            isFilterClicked: false,
            categoriesFetched: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClickFilter = this.handleClickFilter.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    componentDidMount(){
        UserService.getCategories()
            .then(response => {
                this.setState({
                    allCategories: response.data,
                    category: response.data[1].catName,
                    categoriesFetched: true
                }, function(){console.log(this.state.allCategories)})
            })
            .catch(() => alert("Couln't load Categories."))
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
     * Method which handles changes of dropdown  
     *  @param {event} event event if something changes 
     */
    handleOptionChange(event){
        this.setState({category: event.target.value}, function(){
            console.log(this.state.category)
        })
    }
    /**
     * Method which is responsible to handle button event
     * @param {event} event event if button is clicked
     */
    handleClickFilter (event) {
        this.setState({ isFilterClicked: true })
    }
    
    render () {
        if (!this.state.categoriesFetched) return null;
        let viewCategory = this.state.allCategories.map(item => {
            return(
                <option key={item.categoryId} value={item.catName}> {item.catName} </option>
            )
        });
        return (
            <>
                <div className="container mt-2">
                    <button type="button" className="btn btn-primary mr-2 mb-2" onClick={this.handleClickFilter}>Add filter</button>
                    {this.state.isFilterClicked && <input className="mr-2 mb-2" type="text" name="postalcode" value={this.state.postalcode} onChange={this.handleChange}/>}
                    {this.state.isFilterClicked && <Link className="btn btn-outline-success my-2 my-sm-0 mr-2 mb-2"  to={`/search?postalCode=${this.state.postalcode}`}>Postal code filter</Link>}
                    {this.state.isFilterClicked && <select className="mr-2 mb-2" value={this.state.category} onChange={this.handleOptionChange}> {viewCategory} </select>}
                    {this.state.isFilterClicked && <Link className="btn btn-outline-success my-2 my-sm-0 mr-2 mb-2"  to={`/search?category=${this.state.category}`}>Category filter</Link>}
                </div>
            </>
        )
    }

}

export default FilterComponent;