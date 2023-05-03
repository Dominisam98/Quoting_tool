import { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./clients.css";
import axios from "axios";


function Clients() {
    const [client, setClients] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.emailjs.com/api/v1.1/history?user_id=Qe2TZvVr5cF1xxQQ5&accessToken=-xGWYL1ltl3U9Az-ri-CM&page=1&count=50`
        )
        .then((res) => {
          const clients = res.data;
        //   console.log(clients.rows);
          let ye;
          let yes;
          let nu;
          let newArr = [];
          function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
          }

          for (let i = 0; i < clients.rows.length; i++) {
            ye = clients.rows[i];
            yes = ye.template_params;
            nu = JSON.parse(yes);
            if (typeof nu?.to_email != "undefined")
            newArr.push(nu?.to_email);

            var unique = newArr.filter(onlyUnique);
            unique= unique.sort()
            setClients(unique)

          }

        });
    };
    fetchData();
  }, []);

  const clientLst = client.map((user) => {
    return (
      <li className="space" key={user}>
        <Link className='hover-2' to={`/clients/${user}`}>{user}</Link>
      </li>
    );
  });





  return (
    <>
      <h1 className="email-quote"> Client List </h1>
      <ul className="clientlist">{clientLst}</ul>
    </>
  );
}

export default Clients;
