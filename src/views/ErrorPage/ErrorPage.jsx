import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate('/home', {replace: true});
    }

  return (
    <div>
      <h1>Ops! Page does not exist!</h1>
        <button className="btn btn-primary" onClick={clickHandler}>Back</button>

    </div>
  )
}

export default ErrorPage;