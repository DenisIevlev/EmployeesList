
import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Всі працівники' },
        { name: 'rise', label: 'На підвищення' },
        { name: 'biggerSalary', label: 'З/п більше 1000$' },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button onClick={() => props.onFilterSelect(name)} className={`btn ${clazz}`} type="button" key={name}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;