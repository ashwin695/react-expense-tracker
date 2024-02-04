import React from "react";
import "./ExpenseList.css"
import ExpenseContext from "../../Page/ExpenseContext";

const ExpenseList = (props) => {
    const expenseCtx = useContext(ExpenseContext);

    const deleteHandler = (expenseId) => {
        expenseCtx.removeExpense(expenseId);
    };

    const editHandler = (expense) => {
        props.onEditExpense(expense);
    };

    return(
        <div>
            <h3 className="expenses-header">Expenses</h3>
            {
                props.expenses.length === 0 ? (
                    <p className="no-expenses">No Expenses added yet.</p>
                ) : (
                    <ul className="expenses-list">
                        {
                            props.expenses.map((expenses, index) => (
                                <li key={index} className="expense-item">
                                    <div>
                                        Money Spent: {expenses.moneySpent} <br></br>
                                        Description: {expenses.description} <br></br>
                                        Category: {expenses.category}
                                    </div>
                                    <div className="btn">
                                        <button onClick={() => deleteHandler(expense.id)}>
                                        Delete
                                        </button>
                                        <button onClick={() => editHandler(expense)}>Edit</button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default ExpenseList