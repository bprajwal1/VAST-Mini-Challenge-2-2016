import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        This is the implementation for the project for the subject of data visualization in the 24 hours seminar lectured on the UTP.
      </p>
      <p>
        Presented by:
      </p>
      <ul>
        <li>
          Juan Pablo Ramírez CC 1094.891.516
        </li>
        <li>
          Juan Manuel Velásquez CC 4.516.755
        </li>
      </ul>
      <p>
        This project tries to attack a challenge that it's described <a href="http://vacommunity.org/2016+VAST+Challenge%3A+MC2" target="_blank">here</a>, and try to answer the following questions:
      </p>
      <ul>
        <li>
          What are the typical patterns in the prox card data? What does a typical day look like for GAStech employees?
        </li>
        <li>
          Describe up to ten of the most interesting patterns that appear in the building data. Describe what is notable about the pattern and explain its possible significance.
        </li>
        <li>
          Describe up to ten notable anomalies or unusual events you see in the data. Prioritize those issues that are most likely to represent a danger or a serious issue for building operations.
        </li>
        <li>
          Describe up to five observed relationships between the proximity card data and building data elements. If you find a causal relationship (for example, a building event or condition leading to personnel behavior changes or personnel activity leading to building operations changes), describe your discovered cause and effect, the evidence you found to support it, and your level of confidence in your assessment of the relationship.
        </li>
      </ul>
      <p>
        You can view the source code of this project on <a href="https://github.com/juanprq/VAST-Mini-Challenge-2-2016" target="_blank">https://github.com/juanprq/VAST-Mini-Challenge-2-2016</a>.
      </p>
      <p>
        You can download the initial aproach to solve this challenge <a href="assets/project.pdf" target="_blank">here</a>.
      </p>
    </div>
  );
}

module.exports = Home;
