// TODO: Replace with reusable button after installing UI library
export default function SignInButton() {
  const handleSignIn = () => {
    // TODO: Replace with proper path, move to consts
    window.location.href = "http://localhost:3000/spotify/login";
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
