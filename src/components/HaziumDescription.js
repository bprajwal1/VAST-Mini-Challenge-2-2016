import React from 'react';

module.exports = () => {
  return (
    <div className="col-md-12">
      <div className="well">
        <h1>
          WHAT
        </h1>
        <p>
          This dataset is a table that as items have each of the registers of a sensor that measure the concentration of the chemical in the air, the building have 4 sensors and the attributes of the table are:
        </p>
        <ul>
          <li>
            <strong>Timestamp:</strong> Sequential ordinal attribute that contains the date and time in the moment of the measurement of the sensor.
          </li>
          <li>
            <strong>Hazium concentration:</strong> Quantitative sequential attribute that contains the measure of the concentration of Hazium on the air.
          </li>
          <li>
            <strong>Sensor:</strong> Categorical attribute that indicates what sensor do the measurement, this value codify the floor and the zone that the sensor is located.
          </li>
        </ul>
        <h1>
          WHY
        </h1>
        <p>
          The general purpouse of this visualization is to look if there are any dangerous concentration of the chemical, the Tamara tasks identified are:
        </p>
        <ol>
          <li>
            Search for outliers in the measurements of the Hazium which are particularly high that can potentially be dangerous for the people in the building <strong>(Browse, Outliers)</strong>.
          </li>
          <li>
            Identify trends in the measurements of Hazium in the different sensors in the building <strong>(Identify, Trends)</strong>.
          </li>
          <li>
            Discover features in the behavior of the data <strong>(Discover, Features)</strong>.
          </li>
          <li>
            Derive the data to unify all the separate files into only one that contains as a categorical attribute the name of the file <strong>(Derive, Features)</strong>.
          </li>
        </ol>
        <h1>HOW</h1>
        <p>
          For this visualization of the Hazium concentration it's used the Line Chart idiom in the Y axis it's the quantitative attribute of Hazium concentration using the position as a channel, having this the most efficient channel, in the X axis it's the ordinal attribute of timestamp using again the most efficient channel, the visualization uses align so the user can identify the trends, and lastly the categorical attribute sensor uses as channel a color hue scale to identify the time series for each sensor.
        </p>
        <h1>Analysis</h1>
        <p>
          In general the concentration of Hazium on the building is low, but there are some behavior that needs a deeper analysis to understand what is happening in the build.
        </p>
        <p>
          The concentation of Hazium is related in all 3 floors, in the visualization the user can identify the pattern, the concentration in all floors usually behavior in a very similar way but in different concentrations, almost every time the highest concentration is in the 3rd floor of the building, that suggest that probably the chemical is very light and tends to go up in the building, so the building can put the sensors in the last floor to do the measurements and can have a good overall of whats happening.
        </p>
        <p>
          The measurements in the second floor present a very close trends, so this observation makes a reinforcement of the idea in the previous paragraph of reducing the sensor to the third floor, this indicates that the concentration in the second floow is almost the same in every zone.
        </p>
        <p>
          There are two spikes in the visualization, in friday 03 and saturday 11, the last spike is really interesting, it shows a significant increase on the chemical concentration, this event happens approximately at midday usually when the workers leave the building.
        </p>
        <p>
          The zones in the blueprint that are in a lila color are the zones with the sensors on it.
        </p>
        <img src="images/hzf1.jpg" className="img-responsive img-rounded center-block" />
        <img src="images/hzf2.jpg" className="img-responsive img-rounded center-block" />
        <img src="images/hzf3.jpg" className="img-responsive img-rounded center-block" />
      </div>
    </div>
  );
}
