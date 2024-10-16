// TODO: Cleanup, use css
export default function SignInButton() {
  const handleSignIn = () => {
    // Redirect to the backend's login route (where OAuth starts)
    window.location.href = "http://localhost:3000/spotify/login"; // Update this with your backend's login URL
  };

  return (
    <button
      onClick={handleSignIn}
      style={{
        padding: "10px 20px",
        fontSize: "18px",
        cursor: "pointer",
        backgroundColor: "#1DB954", // Spotify's green color
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Sign In with Spotify
    </button>
  );
}
