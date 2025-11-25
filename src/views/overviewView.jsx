/**
 * Renders the overview view
 * @returns the overview view component
 */
function OverviewView(){
    const tasks = [
        {title: "Task 1", description: "Description 1"},
        {title: "Task 2", description: "Description 2"},
        {title: "Task 3", description: "Description 3"}
    ];

    return(
        <div>
            <table>
                <tbody>
                    {tasks.map(tasksRowCB)}
                </tbody>
            </table>
        </div>
    );
} 

function tasksRowCB(task){
    return(
        <tr>
            <td>
                <div>{task.title}</div>
                <div>{task.description}</div>
            </td>
        </tr>
    );
}