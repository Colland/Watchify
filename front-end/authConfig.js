export const msalConfig = {
    auth: {
      clientId: "8a794a6f-26dd-4d27-bf90-7c6b0e92193e", // Replace with your Azure B2C application client ID
      authority: "https://watchify.b2clogin.com/watchify.onmicrosoft.com/B2C_1_SignUpSignIn", // Replace with your tenant and policy names
      knownAuthorities: ["watchify.b2clogin.com"], // Replace with your tenant name
      redirectUri: "http://localhost:5173", // The URL to redirect back to after login
    },
    cache: {
      cacheLocation: "sessionStorage", // You can also set this to "localStorage"
      storeAuthStateInCookie: false,
    },
  };
  
  // MSAL.js scopes for acquiring tokens
  export const loginRequest = {
    scopes: ["openid", "profile", "email"],
  };