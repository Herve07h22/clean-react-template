import { app } from "app/App";
import { Button } from "app/ui/buttons/Button";
import { UserSession } from "core/auth/state/UserSession";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Navigate } from "react-router-dom";

type LoginForm = {
  email: string;
  password: string;
  remember: boolean;
};

export const Login = observer(() => {

  const { userSession } = app

  // Local state to manage the form's state.
  // No need to push it to the core app.
  const [formState, setFormState] = useState<LoginForm>({
    remember: true,
    email: "",
    password: "",
  });


  if (userSession.isLogged) {
    return <Navigate to="/" />;
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userSession.login(formState.email, formState.password);
  };

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={onSubmit}>
              <div className="mb-6">
                <input
                  name="email"
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                  value={formState?.email}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
                />
              </div>

              <div className="mb-6">
                <input
                  name="password"
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  value={formState?.password}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, password: e.target.value }))
                  }
                />
              </div>

              <Button type="submit">Sign in</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});
