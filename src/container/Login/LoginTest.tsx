import React, { useState, useEffect } from "react";
import qs from "qs";

const CLIENT_ID =
  "782579889231-c6pnd76dd0hn98neh1bnbvn66lpt4u52.apps.googleusercontent.com";
const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";
const PEOPLE_URI = "https://www.googleapis.com/oauth2/v1/tokeninfo";

const queryStr = qs.stringify({
  client_id: CLIENT_ID,
  redirect_uri: `${window.location.href}login`,
  response_type: "token",
  scope: "https://www.googleapis.com/auth/youtube"
});

const loginUrl = AUTHORIZE_URI + "?" + queryStr;

const Login2 = () => {
  const { access_token } = qs.parse(window.location.hash.substr(1));
  if (!access_token) {
    console.log(window.location.hash);
    window.location.assign(loginUrl);
    return null;
  }

  const [contactGroups, setContactGroups] = useState([]);

  useEffect(() => {
    fetch(PEOPLE_URI, {
      headers: { Authorization: "Bearer " + access_token }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setContactGroups(data.contactGroups)
      });
  }, [access_token]);
  return (
    <>
      <h2>Contact Groups</h2>
      <ul>
        {contactGroups &&
          contactGroups.map(({ resourceName, name, memberCount }) => (
            <li key={resourceName}>
              {name} ({memberCount})
            </li>
          ))}
      </ul>
    </>
  );
};

export default Login2;