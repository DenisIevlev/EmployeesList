import './app-info.css';

const AppInfo = (props) => {
 return (
    <div className="app-info">
      <h1>Облік працівників у компанії N</h1>
      <h2>Загальна кількість працівників {props.employeesCount}</h2>
      <h2>Премію отримають: {props.employeesIncreasedCount}</h2>
    </div>
 )
};

export default AppInfo;