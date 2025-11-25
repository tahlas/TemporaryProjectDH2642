// TODO make a reactive model (application state), pass it as prop to the components used
import {createRoot} from "react-dom/client";
const mountedApp= createRoot(document.getElementById('root'))
mountedApp.render(<div>Hello World!</div>);

//this is for testing. remove everything below later:
import "/src/style.css";
mountedApp.render(<OverviewView />);  


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
            <td className="tasks">
                <div>{task.title}</div>
                <div>{task.description}</div>
            </td>
        </tr>
    );
}