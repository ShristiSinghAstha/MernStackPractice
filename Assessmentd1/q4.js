// 4. Create a function createUser(role) that returns a function to check role-based access

function createUser(role) {
  return function(action) {
    const rolePermissions = {
      admin: ["read", "write", "delete"],
      editor: ["read", "write"],
      viewer: ["read"]
    };
    const permissions = rolePermissions[role] || [];
    return permissions.includes(action);
  };
}   
const isAdmin = createUser("admin");
console.log(isAdmin("delete"));
