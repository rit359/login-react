import React from "react";
import{Field, reduxForm} from "redux-form";

const renderField = (field, meta) => (
  
    <div className="input-row">
        <pre>{JSON.stringify(meta)}</pre>
      <input {...field.input} type="text"/>
      {field.meta.touched && field.meta.error &&
       <span className="error">{field.meta.error}</span>}
    </div>
  );


  const required = value => (value || typeof value === 'number' ? undefined : 'Required')

 


let SignupForm = props => {
  const { handleSubmit, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component={renderField} type="text"  validate={required}/>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component={renderField} type="text" validate={required}/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component={renderField} type="email" validate={required}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component={renderField} type="password" validate={required}/>
      </div>
      <button type="submit" disabled={submitting}>Submit</button>
    </form>
  )
}

SignupForm = reduxForm({
  // a unique name for the form
  form: 'signup'
})(SignupForm)

export default SignupForm