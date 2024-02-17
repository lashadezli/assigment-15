
const auth = {
    users: [
    ],
    isAuthenticated: () => {
      return true;
    },
    authenticate: (usernameOrEmail, password) => {
      const user = auth.users.find(
        (u) =>
          (u.username.toLowerCase() === usernameOrEmail.toLowerCase() ||
            u.email.toLowerCase() === usernameOrEmail.toLowerCase()) &&
          u.password === password
      );
  
      return Boolean(user);
    },
    logout: () => {
    },
  };
  
  export default auth;
  