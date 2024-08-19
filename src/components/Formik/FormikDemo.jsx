import { useFormik } from "formik"

export function FormikDemo(){



    const formik=useFormik(
        {
            initialValues:{
                username:'',
                password:'',
                email:'',
                phone:'',
            },

            validate: UserValidation,

            onSubmit:(values)=>{
                alert(JSON.stringify(values));
            }
        }
    )

    function UserValidation(formBody){
        const errors={};
        if(formBody.username==""){
            errors.username="Username is required";
        }
        else{
            errors.username="";
        }
        if(formBody.password==""){
            errors.password="Password is required";
        }
        else{
            errors.password="";
        }
        if(formBody.email==""){
            errors.email="Email is required";
        }
        else{
            errors.email="";
        }
        if(formBody.phone==""){
            errors.phone="Phone is required";
        }
        else{
            errors.phone="";
        }
        return errors;

    }

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Username</dt>
                    <dd><input type="text" name="username" onChange={formik.handleChange} /></dd>
                    <dd className="text-bg-danger">{formik.errors.username}</dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="password" onChange={formik.handleChange} /></dd>
                    <dd className="text-bg-danger">{formik.errors.password}</dd>

                    <dt>Email</dt>
                    <dd><input type="email" name="email" onChange={formik.handleChange} /></dd>
                    <dd className="text-bg-danger">{formik.errors.email}</dd>

                    <dt>Phone</dt>
                    <dd><input type="tel" name="phone"  onChange={formik.handleChange}/></dd>
                    <dd className="text-bg-danger">{formik.errors.phone}</dd>

                    <button  >Submit</button>
                </dl>
            </form>
        </div>
    )
}