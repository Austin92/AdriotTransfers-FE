import React from "react";
import { Component } from "react";

export default class MainContent extends Component {

    state = {
        pageTitle: "Employees",
        employeesCount: 5,
        employees: [
            { id: 1, name: 'Tom', age: '12', city: 'NY' },
            { id: 2, name: 'Tobi', age: '13', city: 'LDN' },
            { id: 3, name: 'Ade', age: '56', city: 'IRL' },
            { id: 4, name: 'Sara', age: null, city: 'NY' },
            { id: 5, name: 'James', age: null, city: 'LDN' },

        ],
    };

    render() {
        return (
            <div>
                <h4 className="border-bottom m-1 p-1">
                    {this.state.pageTitle}
                    <span className="badge badge-primary" m-2>
                        {this.state.employeesCount}
                    </span>
                    <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh
                    </button>
                </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>age</th>
                            <th>city</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map((emp) => {
                                return (
                                    <tr key={emp.id}>
                                        <td>{emp.id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.age}</td>
                                        <td>{emp.city}</td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>

                </table>

            </div>
        );
    }

    //Executes when the user clicks on Refresh button
    onRefreshClick = () => {
        this.setState({
            employeesCount: 7,
        });

    }
}
