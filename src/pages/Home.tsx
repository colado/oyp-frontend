import { useState } from "react";

export default function Home() {
  const [imported, setImported] = useState(false);
  const [loading, setLoading] = useState(false);

  const importAndSavePlaylists = async () => {
    setLoading(true);

    try {
      // Step 1: Fetch playlists from Spotify
      const importResponse = await fetch("http://localhost:3000/spotify/import", {
        method: "POST",
        credentials: "include", // Include cookies in the request
      });

      if (importResponse.ok) {
        const { playlists } = await importResponse.json();

        // Step 2: Save playlists to IPFS
        const saveResponse = await fetch("http://localhost:3000/playlists/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ playlists }),
        });

        if (saveResponse.ok) {
          const data = await saveResponse.json();
          console.log("Playlists saved to IPFS with CID:", data.cid);
          setImported(true);
        } else {
          console.error("Failed to save playlists to IPFS");
        }
      } else {
        console.error("Failed to import playlists from Spotify");
      }
    } catch (error) {
      console.error("Error during playlist import or save:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Home</h1>
      <p>You have been successfully authenticated with Spotify.</p>

      {!imported ? (
        <div>
          <button
            onClick={importAndSavePlaylists}
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              cursor: "pointer",
              backgroundColor: "#1DB954", // Spotify's green color
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
            disabled={loading}
          >
            {loading ? "Processing..." : "Import Playlists"}
          </button>
        </div>
      ) : (
        <p>Playlists imported and saved to IPFS!</p>
      )}
    </div>
  );
}
