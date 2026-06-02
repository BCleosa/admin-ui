const city = "Semarang";
const street = "Jl. Mawar No. 123";

  export const getUsers = () => { 
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      return users.map((user) => ({
        name: user.name,
        email: user.email,
        city: user.address.city,
        address: `${user.address.street} No. ${user.address.suite}`,
      }));
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
      throw error;
    });
};