import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John C.", salary: 800, increase: true, rise: true, id: uuidv4() },
                { name: "Alex M.", salary: 1000, increase: false, rise: false, id: uuidv4() },
                { name: "George W.", salary: 900, increase: false, rise: false, id: uuidv4() },
            ],
            term: '',
            filter: ''
        }
    }

    addItem = (name, salary) => {
        let newItem = {
            name,
            salary,
            id: uuidv4(),
            increase: false,
            rise: false
        }
        this.setState(({ data }) => {
            let newArr = [...data, newItem];
            if (newItem.name && newItem.salary !== '') {
                return {
                    data: newArr
                }
            } else {
                return;
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onSearch = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onSearchUpdate = (term) => {
        this.setState({ term })
    }

    onFilterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise === true);
            case 'biggerSalary':
                return items.filter(item => item.salary > 1000);
            default: return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { data, term, filter } = this.state;
        const countOfEmployees = data.length;
        const countOfIncreasedEmployees = data.filter(item => item.increase === true).length;
        const visibleData = this.onFilterPost(this.onSearch(data, term), filter);
        return (
            <div className="app">
                <AppInfo employeesCount={countOfEmployees} employeesIncreasedCount={countOfIncreasedEmployees} />
                <div className="search-panel">
                    <SearchPanel onSearchUpdate={this.onSearchUpdate} />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>
                <EmployeesList data={visibleData} onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;