require 'csv'
require 'json'

namespace :building do

  desc 'Process the general temperature file for the building'
  task :process_temperature_file do |t, args|
    puts 'Start processing the general building file'

    file = '/home/juanprq/maestría/viz/csv/bldg-MC2.csv'

    fields = {
      'drybulb'       => 1,
      'waterTank'     => 2,
      'sideInlet'     => 5,
      'sideOutlet'    => 6,
      'loopSchedule'  => 9,
      'waterSetpoint' => 10,
    }

    json = {}
    fields.keys.each { |key| json[key] = [] }
    skip_headers = true
    CSV.foreach file do |row|
      if skip_headers
        skip_headers = false
        next
      end

      fields.each do |key, index|
        json[key].push build_value(row, index)
      end
    end

    File.open('temperature.json', 'w') do |f|
      f.puts json.to_json
    end

    puts 'Finish...'
  end

  desc 'Process the general power file for the building'
  task :process_power_file do
    puts 'Start processing the power file'

    file = '/home/juanprq/maestría/viz/csv/bldg-MC2.csv'
    fields = {
      # 'hvacDemand'    => 7,
      # 'totalDemand'   => 8,
      'deliFanDemand' => 11,
      'pumpDemand'    => 12,
    }

    csv_values = CSV.read file
    csv_values.shift
    response = fields.map do |key, index|
      {
        code: key,
        values: csv_values.map{ |row|  build_power_value(row, index) },
      }
    end

    File.open('power.json', 'w') do |f|
      f.puts response.to_json
    end

    puts 'Finish...'
  end

  private
    def build_value(row, field_index)
      {
        time: row[0],
        temperature: row[field_index],
      }
    end

    def build_power_value(row, field_index)
      {
        time: row[0],
        power: row[field_index],
      }
    end
end
