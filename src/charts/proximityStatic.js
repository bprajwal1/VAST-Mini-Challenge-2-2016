import * as d3 from 'd3';

module.exports = (id, data) => {
  const svg = d3.select(`#${id}`);
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = svg.attr('width') - margin.left - margin.right;
  const height = svg.attr('height') - margin.top - margin.bottom;

  const div = d3.select('body')
    .append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  // proportions
  const series = Object.keys(data).length;
  const partialHeight = (height / series) - 2;
  const labelSpace = 30;
  const partialWidth = width - labelSpace;

  const x = d3.scaleBand().rangeRound([0, partialWidth]).padding(0.1);
  const y = d3.scaleLinear().rangeRound([partialHeight - margin.top, 0]);

  // for now lets doit this way
  x.domain(data.floor1.map(item => item.zone));
  y.domain([0, d3.max(data.floor2, item => item.count)]);

  Object.keys(data).forEach((floor, index) => {
    const floorData = data[floor];

    g.append('text')
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .attr('fill', '#000')
      .attr('transform', `translate(0,${(partialHeight) * index})rotate(-90)`)
      .attr('y', -20)
      .attr('x', -80)
      .text(`Floor ${index + 1}`);

    const multiple = g.append('g')
      .attr('transform', `translate(${labelSpace},${(partialHeight) * index})`);

    multiple.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', `translate(0, ${partialHeight})`)
      .call(d3.axisBottom(x))
    .append('text')
      .attr('y', 6)
      .attr('x', partialWidth - 5)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .attr('fill', '#000')
      .text('Zone');

    multiple.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(10))
      .attr('transform', `translate(0, ${margin.top})`)
    .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('x', -5)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .attr('fill', '#000')
      .text('Frequency');

    multiple.selectAll('.bar')
      .data(floorData)
      .enter()
      .append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.zone))
        .attr('y', d => y(d.count) + margin.top)
        .attr('width', x.bandwidth())
        .attr('height', d => (partialHeight) - y(d.count) - margin.top)
        .on('mouseout', mouseout)
        .on('mousemove', mousemove)
        .on('mouseover', mouseover);

    function mouseover(d) {
      div.transition()
        .duration(200)
        .style('opacity', 1);


      div.html(`Frecuency: ${d.count}`)
        .style('left', `${(d3.event.pageX) - 57}px`)
        .style('top', `${(d3.event.pageY) - 40}px`)
    }

    function mouseout(d) {
      div.transition()
        .duration(500)
        .style('opacity', 0);
    }

    function mousemove(d) {
      div
        .style('left', `${(d3.event.pageX - 57)}px`)
        .style('top', `${(d3.event.pageY) - 40}px`)
    }
  })
};
