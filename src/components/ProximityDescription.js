import React from 'react';

module.exports = () => {
  return (
    <div className="col-md-12">
      <div className="well">
        <h1>
          WHAT
        </h1>
        <p>
          This dataset is a table that contains the registers of an employee every time that passes at 4ft or less of a proximity sensor, the attributes are:
        </p>
        <ul>
          <li>
            <strong>Timestamp:</strong> Ordinal attribute that represents the date and time that the event is triggered on the proximity sensor.
          </li>
          <li>
            <strong>Type:</strong> Categorical attribute indicating the sensor that was triggered.
          </li>
          <li>
            <strong>Prox-id:</strong> Categorical attribute indicating the id of the sensor that was triggered.
          </li>
          <li>
            <strong>Floor:</strong> Categorical attribute indicating the floor where the triggered sensor is located.
          </li>
          <li>
            <strong>Zone:</strong> Categorical attribute that indicates the zone where the sensor is located.
          </li>
          <li>
            <strong>X:</strong> Sequential quantitative attribute that indicates the horizontal position of the diynamic sensor position when it was triggered by proximity (this value is only present on the dynamic sensors).
          </li>
          <li>
            <strong>Y:</strong> Sequential quantitative attribute that indicates the vertical position of the diynamic sensor position when it was triggered by proximity (this value is only present on the dynamic sensors).
          </li>
        </ul>
        <h1>
          WHY
        </h1>
        <ol>
          <li>
            Discover features on the data by zone <strong>(Discover, Features)</strong>.
          </li>
          <li>
            Identify trends on the visits to the different zones on the building <strong>(Identify, Trends)</strong>.
          </li>
          <li>
            Explore the different zones to view which are the most visited per floor <strong>(Explore, Features)</strong>.
          </li>
          <li>
            Compare the traffic of employees between the different zones and floors <strong>(Compare, Features)</strong>.
          </li>
          <li>
            Derive the data to obtain the count per zone during the two weeks in the time series <strong>(Derive, Features)</strong>.
          </li>
        </ol>
        <h1>
          HOW
        </h1>
        <p>
          The Bar Chart idiom is used in combination with small multiples to do comparations between the different floors, in the Y axis the sequential quantitative attribute of number of events is used, in the X axis we have the different zones using separate and align, the position in this case is the most effective channel to express the values of those attributes, lastly using juxtaposition between the floors we can do comparations.
        </p>
        <h1>
          Analysis
        </h1>
        <p>
          In general the zones with most traffic are the elevator, stairs and the common areas, this make sense because those are the zones that people need to travel to go to their respecting offices.
        </p>
        <p>
          The most activity is in the second floor, this make sense because it's expected that people move around in this space, this is the floor with the most offices in the building.
        </p>
        <p>
          The third floor is the one that have the less transit of the three, in this floor are a big area (zone 5) that it's reserved for a future expansion, and the data show that no one entered this zone.
        </p>
        <p>
          The amount of activity in the second floor suggest that probably people with offices on it are leaving their proximity cards on the building when they leave and this reduces de amount of data registered on the first floor.
        </p>
        <img src="images/proxf1.jpg" className="img-responsive img-rounded center-block" />
        <img src="images/proxf2.jpg" className="img-responsive img-rounded center-block" />
        <img src="images/proxf3.jpg" className="img-responsive img-rounded center-block" />
      </div>
    </div>
  );
}
