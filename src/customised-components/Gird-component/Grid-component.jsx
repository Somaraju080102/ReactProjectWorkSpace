
export function GridComponent(props){
    return(
        <div className="container-fluid">
            <table className="table table-hover table-primary">
                <thead>
                    {
                        props.fields.map((header) => (
                            <th key={header}>{header}</th>
                        ))
                    }
                </thead>
                <tbody>
                    {
                        props.data.map((objdata)=>(
                            <tr key={objdata}>
                                {
                                    Object.keys(objdata).map((key) => (
                                        <td key={objdata[key]}>{objdata[key]}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}