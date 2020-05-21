import React from 'react';

const DisplayTodos = ( {todos, deleteTodo} ) => {                   

    const todosTemplate = todos.length ? (
        todos.map( todo => {
            return (
                <div className='collection-item' key={todo.id}> 
                    <span onClick={ () => {deleteTodo(todo.id)}}>
                        {todo.content}
                    </span>
                        
                </div>
            )
        }) 
    ) : (
        <p className='center'> No todo left </p> 
    )                                

    return (
        <div className='todos collection'>
            { todosTemplate }                               
        </div>
    )
}

export default DisplayTodos;