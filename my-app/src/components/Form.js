import React from "react";

const Form = () => {
	return (
		<form action="mailto:ruan060606@yahoo.com?subject=JOB" method="post" enctype="text/plain">
		Name:
		<br/>
		<input type="text" name="name"/>
		<br/>
		E-mail:<br/>
		<input type="email" name="mail"/>
		<br/>
		Comment:
		<br/>
		<input type="text" name="comment" size="50"/>
		<br/><br/>
		<input type="submit" value="Send"/>
		<input type="reset" value="Reset"/>
		</form>
	)
}
export default Form;