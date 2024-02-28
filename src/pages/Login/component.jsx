import { NavLink } from "react-router-dom"
import { Button } from "../../components/Button/component"

export const Login = () => {
  return (
    <div className="margin-t-2 margin-l-2">
      <input type="text" value='some username' disabled={true} />
      <br/>
      <br/>
      <input type="password" value={1234567890} disabled={true} />
      <br/>
      <br/>
      <NavLink to={'/restaurants'}>
        <Button>Login</Button>
      </NavLink>
    </div>
  )
}
