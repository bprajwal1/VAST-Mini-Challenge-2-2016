import React from 'react';

module.exports = () => {
  return(
    <div className="col-md-12">
      <div className="well">
        <h1>
          WHAT
        </h1>
        <p>
          This dataset is a table with each iteam as the measurements of the multiple sensors of the ventilation system in the building, the attributes are:
        </p>
        <ul>
          <li>
            <strong>Timestamp:</strong> Ordinal attribute with the date and time of the measurement.
          </li>
          <li>
            <strong>Drybulb temperature:</strong> Divergent quantitative attribute for the air temperature measurement.
          </li>
          <li>
            <strong>Water heater tank temperature:</strong> Divergent quantitative attribute that measure the water temperature of the heater tank.
          </li>
          <li>
            <strong>Water heater gas rate:</strong> Divergent quantitative attribute that measure the gas-rate for the heater system.
          </li>
          <li>
            <strong>Supply side inlet mass flow rate:</strong> Divergent quantitative attribute that measures the proportion of air that enters the building.
          </li>
          <li>
            <strong>Supply Side Inlet Temperature:</strong> Divergent quantitative attribute that measures the temperature of the air that enters in the system of the building.
          </li>
          <li>
            <strong>Supply Side Outlet Temperature:</strong> Divergent quantitative attribute that measures the temperature that leave the air system of the building.
          </li>
          <li>
            <strong>HVAC Electric Demand Power:</strong> Sequential quantitative attribute tha measures the amount of energy that the system of the building consumes.
          </li>
          <li>
            <strong>Total Electric Demand Power:</strong> Sequential quantitative attribute that measures the total amount of energy that the building consumes.
          </li>
          <li>
            <strong>Loop Temp Schedule:</strong> Sequential quantitative attribute that indicates the cycles of the temperature controller in the building.
          </li>
          <li>
            <strong>Water Heater Setpoint:</strong> Divergent quantitative attribute that indicates the set point of the water heater.
          </li>
          <li>
            <strong>DELI-FAN Power:</strong> Sequential quantitative attribute that indicates the amount of energy that the deli fan consumes.
          </li>
          <li>
            <strong>Pump Power:</strong> Sequential quantitative attribute that indicates the amount of energy that the water pump consumes.
          </li>
        </ul>
        <h1>
          WHY
        </h1>
        <ol>
          <li>
            Discover features in energy consumption and temperature in the time series <strong>(Discover, Features)</strong>.
          </li>
          <li>
            Identify trends in the energy consume and the temperature of the building <strong>(Identify, Trends)</strong>.
          </li>
          <li>
            Compare the energy consumption between the systems <strong>(Compare, Features)</strong>.
          </li>
        </ol>
        <h1>
          HOW
        </h1>
        <p>
          For the visualization of the temperatures in the building the idiom Line Chart is used, in the Y axis we have the divergent quantitative attribute of temperature, in the X axis we have the time that the sensor takes de measure, it uses the horizontal and vertical position to express those two attributes having the most effective channel, also a color hue scale is used to identify the multiple sensors.
        </p>
        <p>
          The energy consumption in the building uses a Line Chart idiom, in the Y axis we have the sequential quantitative attribute of energy, in the X axis we have the ordinal sequential attribute of time, the position horizontal and vertical express those two attributes, uses align to identify the trends on the data and juxtaposition to compare the energy consumption and lastly it uses a color hue scale to identify the various sensors.
        </p>
        <h1>
          Analysis
        </h1>
        <p>
          In the temperature visualization the set point and the water heater tank is flat and have the same values, in this case the data is giving us information that this part of the system is working very well.
        </p>
        <p>
          The temperature in the side outlet show that in weekends are less variation, this tell us that most people doesn't work does days in the building, this temperature is very stable and indicates that the system is working ok.
        </p>
        <p>
          The temperature in the weekends drop a lot less, this can indicate that the doors of the building remaing closed for the most part so the temperature more stable.
        </p>
        <p>
          The energy consumption in the building is related to the consumption of the HVAC system, the visualization show us very similar trends between the two lines. What is expected from the HVAC system the weekends is that show less consumption but instead the first weekend was higher than normal working days, this can be a sign of troubles in the system.
        </p>
        <p>
          Since the start of second week on monday 6 the energy consumption on the building was presenting a lot variation, but particularly starting on saturday 11 the system consumption was pretty high until monday, this can indicate that someting was happening, this event also can be related with tha Hazium concentration that presents also high levels on the same date, this indicate that probably the HVAC system was causing the high levels of the chemical concentration, also can be a malfunction of the system and the air circulation on the building wasn't enough.
        </p>
        <p>
          The deli fan also presents a high consumption of energy on the weekends, the data shows that in working nights this fan is off, so a review is necessary to evaluate why the fan have such a high consumption on weekends.
        </p>
      </div>
    </div>
  );
}
