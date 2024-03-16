import './employees-add-form.css';

import { Component } from 'react';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }
onValueChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
}

render() {
    const { name, salary } = this.state;
    return (
        <div className="app-add-form">
            <h3>Додайте нового працівника</h3>
            <form
                onSubmit={this.onSubmit}
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Як його звати?"
                    name="name"
                    value={name}
                    onChange={this.onValueChange} />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    name="salary"
                    value={salary}
                    onChange={this.onValueChange} />

                <button type="submit"
                    className="btn btn-outline-light">Додати</button>
            </form>
        </div>
    );
};
};

export default EmployeesAddForm;