require 'csv'
require 'json'

namespace :proximity do

  desc 'process the proximity static sensors data'
  task :process_static_file do
    file = '/home/juanprq/maestría/viz/csv/proxOut-MC2.csv'
    json = {}

    csv_values = CSV.read file
    csv_values.shift

    floor_1_values = csv_values.select{ |row| row[3].strip == '1' }
    json['floor1'] = (1..8).map do |zone|
      {
        zone: zone,
        count: floor_1_values.select{ |row| row[4].strip == zone.to_s }.size,
      }
    end

    floor_2_values = csv_values.select{ |row| row[3].strip == '2' }
    json['floor2'] = (1..7).map do |zone|
      {
        zone: zone,
        count: floor_2_values.select{ |row| row[4].strip == zone.to_s }.size,
      }
    end

    floor_3_values = csv_values.select{ |row| row[3].strip == '3' }
    json['floor3'] = (1..6).map do |zone|
      {
        zone: zone,
        count: floor_3_values.select{ |row| row[4].strip == zone.to_s }.size,
      }
    end

    File.open('proximity_static.json', 'w') do |f|
      f.puts json.to_json
    end
  end
end