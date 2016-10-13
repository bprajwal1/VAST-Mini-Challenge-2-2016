require 'csv'

namespace :hazium do

  desc 'Process the files to generate a new estructured file'
  task :process_files do |t, args|
    puts 'Start processing the hazium files'

    files = {
      f1z8a: '/home/juanprq/maestría/viz/csv/f1z8a-MC2.csv',
      f2z2:  '/home/juanprq/maestría/viz/csv/f2z2-MC2.csv',
      f2z4:  '/home/juanprq/maestría/viz/csv/f2z4-MC2.csv',
      f3z1:  '/home/juanprq/maestría/viz/csv/f3z1-MC2.csv',
    }

    CSV.open('./hazium.csv', 'a') do |csv|
      csv << get_headers

      files.each do |key, file|

        puts "working with file: #{key}"

        skip_headers = true
        CSV.foreach file do |row|
          if skip_headers
            skip_headers = false
            next
          end

          new_value = row + get_attributes(key)
          csv << new_value
        end
      end
    end

    puts 'Finish...'
  end

  private
    def get_headers
      [
        'time',
        'hazium',
        'floor',
        'zone',
        'code',
      ]
    end

    def get_attributes(code)
      case code
      when :f1z8a
        return [2, '8a', code]
      when :f2z2
        return [2, '2', code]
      when :f2z4
        return [2, '4', code]
      when :f3z1
        return [3, '1', code]
      end
    end

end
