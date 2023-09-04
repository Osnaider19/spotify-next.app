"use client";

export default function Login() {
  const handleLogin = () => {
    const url_redirect = "http://localhost:3000/";
    const scope = "user-read-private user-read-email";
    const CLIENTID = "0f12cb2d61f84deb81484bb15cec1438";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const spotifyUrl = `${AUTH_ENDPOINT}?client_id=${CLIENTID}&response_type=code&redirect_uri=${url_redirect}&scope=${scope}`;
    location.replace(spotifyUrl);
  };

  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <button
        className="py-2 px-4 rounded-xl bg-green-500 hover:bg-green-600"
        onClick={handleLogin}
      >
        Connect Spotify
      </button>
    </div>
  );
}
