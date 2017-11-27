import React, { Component } from 'react';

export default class CoffeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                description: '',
                rating: '',
            shops: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.addCoffeeShop = this.addCoffeeShop.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    addCoffeeShop(event) {
        event.preventDefault();
        const shop = {
            name:this.state.name,
            description:this.state.description,
            rating:this.state.rating
        };
        this.setState({ shops: this.state.shops.concat(shop) })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addCoffeeShop}>
                    <label htmlFor="name">Name: <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder="What the name of the Coffee Shop?"
                    />
                    </label>
                    <label htmlFor="description">
                        description: <input
                            name="description"
                            type="text"
                            value={this.state.description}
                            onChange={this.handleChange}
                            placeholder="Enter short description"
                        />
                    </label>
                    <label htmlFor="rating">
                        rating: <input
                            name="rating"
                            type="text"
                            value={this.state.rating}
                            onChange={this.handleChange}
                            placeholder="What do you rate this place?"
                        />
                        <input type="submit" value="Submit" />
                    </label>
                </form>
                <h1>Cool Coffee</h1>
                <ul>
                    {this.state.shops.map(shop =>
                    <li>
                    <h2>{shop.name}</h2>
                    <p>{shop.description}</p>
                    <div className="Rating">{shop.rating}</div>
                </li>
                    )}
                </ul>
            </div>
        )
    }
}