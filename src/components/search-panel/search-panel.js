import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }

    onSearchUpdate = (event) => {
      const term = event.target.value;
      this.setState({term});
      this.props.onSearchUpdate(term);
    }

    render() {
        const {term} = this.state;
        return (
            <input type="text" className="form-control search-input" placeholder="Знайти працівника" value={term} onChange={this.onSearchUpdate}/>
        )
    };
};

export default SearchPanel;