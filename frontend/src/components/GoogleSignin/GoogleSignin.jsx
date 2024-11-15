import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { StoreContext } from "../../context/StoreContext.jsx";

const GoogleSignin = () => {
    const { url, setToken } = useContext(StoreContext)
    const navigate = useNavigate();

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '204750464417-n9d1q3ia40q9dcr7vckvnul91jk4ilsa.apps.googleusercontent.com', // Replace with your actual Google client ID
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv"),
      { theme: "filled_blue", size: "large", shape: "pill" } // Customize the button
    );
  }, []);

  const handleCredentialResponse = async (response) => {
      const { credential } = response; // Get the ID token from the response
    // console.log("Encoded JWT ID token: " + credential);
    try {
        const res = await axios.post(`${url}/api/user/googlelogin`, {
            token: credential, // Send the token to the backend
        });

        if (res.data.success) {
            // console.log("Login successful", res.data);
            setToken(res.data.token); // Save the token in context or local storage
            localStorage.setItem("token", res.data.token);
            navigate('/');
            // Optionally redirect to home or another page
        } else {
            // console.error("Login failed", res.data.message);
        }
    } catch (error) {
        // console.error("Error during login", error);
    }
  };

  return (
    <div>
      <div id="googleSignInDiv"></div>
    </div>
  );
};

export default GoogleSignin;