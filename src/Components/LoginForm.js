import React from 'react';

class LoginForm extends React.Component{
    render(){
        return(
            <section className="section continer">
                <div className="columns is-centered">
                    <div className="columns is-half">
                        <form>
                            <div className="field">
                                <label className="label">
                                Email
                                </label>

                                    <div className="control">
                                        <input className="input" type="email" name="email"/>
                                    </div>
                            </div>

                            <div className="field">
                                <label className="label">
                                Password
                                </label>

                                    <div className="control">
                                        <input className="input" type="password" name="password"/>
                                    </div>
                            </div>

                            <div className="field is-grouped">
                                    <div className="control">
                                       <button className="buttion is-link">Submit</button>
                                    </div>
                                    <div className="control">
                                       <button className="buttion is-text">Cancel</button>
                                    </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
export default LoginForm