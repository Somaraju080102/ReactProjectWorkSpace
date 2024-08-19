import { GridComponent } from "./Gird-component/Grid-component";
import { LoginComponent } from "./login/Login-Component";

export function HomeComponent(){
    return (
        <div className="container-fluid">
            <h1>Home Page</h1>
            <GridComponent  data={[{'FirstName':'Raju','LastName':'Soma','Salary':34000},{'FirstName':'Venkat','LastName':'Indukuri','Salary':2000}]} fields={["FirstName" ,"LastName","Salary"]} />
        </div>
    )
}