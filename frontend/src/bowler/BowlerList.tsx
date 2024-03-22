import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function FoodList() {
  const [foodData, setBowlerData] = useState<Bowler[]>();

  useEffect(() => {
    const fetchBowlerData = async () => {
      const rsp = await fetch('http://localhost:5193/bowler');
      const f = await rsp.json();
      setBowlerData(f);
    };
    fetchBowlerData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">
          This website will show you the information from the player of the
          Marlins and Sharks team!
        </h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {foodData?.map((f) => (
            <tr key={f.bowlerId}>
              <td>
                {f.bowlerFirstName}
                {f.bowlerMiddleInit}
                {f.bowlerLastName}
              </td>
              <td>{f.team?.teamName}</td>
              <td>{f.bowlerAddress}</td>
              <td>{f.bowlerCity}</td>
              <td>{f.bowlerState}</td>
              <td>{f.bowlerZip}</td>
              <td>{f.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default FoodList;
