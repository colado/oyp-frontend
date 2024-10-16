export const isAuthenticated = async (): Promise<boolean> => {
  try {
    const response = await fetch("http://localhost:3000/auth/check-auth", {
      method: "GET",
      credentials: "include", 
    });

    return response.ok;
  } catch (error) {
    console.error("Error checking authentication status:", error);
    return false;
  }
};
