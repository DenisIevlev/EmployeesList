import './employees-list.css';

import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    let elements = data.map(item => <EmployeesListItem key={item.id} {...item} onDelete={() => onDelete(item.id)}
    onToggleProp={(event) => onToggleProp(item.id, event.currentTarget.getAttribute('data-toggle'))}/>);
    return (
       <ul className="app-list list-group">
        {elements}
       </ul>
    )
}

export default EmployeesList;