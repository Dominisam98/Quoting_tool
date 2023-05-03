import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Client() {
  const [user, setUser] = useState({});
  const [cli, setClient] = useState([]);
  const [salesagent, setSalesAgent] = useState([]);
  const { email } = useParams();
  console.log(email);
  let ye;
  let yes;
  let nu;
  let newArr = [];
  let salesArr = [];

  useEffect(() => {
    if (!email) {
      return;
    }
    (async () => {
      const response = await fetch(
        `https://api.emailjs.com/api/v1.1/history?user_id=Qe2TZvVr5cF1xxQQ5&accessToken=-xGWYL1ltl3U9Az-ri-CM&page=1&count=50`
      );
      const user = await response.json();

      for (let i = 0; i < user.rows.length; i++) {
        ye = user.rows[i];
        // console.log(ye)
        yes = ye.template_params;
        // console.log(yes)
        // console.log(nu?.to_name)
        nu = JSON.parse(yes);
        console.log(nu?.from_name)
        if (email == nu?.to_email ) newArr.push(nu?.to_name);
        if (email == nu?.to_email ) salesArr.push(nu?.from_name);

        // if (email == nu?.to_email) newArr.push(nu?.price);

        // var unique = newArr.filter(onlyUnique);
        // setClients(unique);
      }
      setSalesAgent(salesArr)
      setClient(newArr)
      console.log(salesagent)
      // console.log(newArr)

    })();
  }, [email]);

  if (!user) {
    return null;
  }

  return (
      <>
    <h1 className="email-quote"> Client List </h1>
    <ul>
      <li>
        <strong>Email</strong> {email}
      </li>
      <li>
        <strong>Client Name</strong> {cli[0]}
      </li>
      <li>
        <strong> Sales Agent </strong>{salesagent[0]}
      </li>
    </ul>
    </>
  );
}
export default Client;
