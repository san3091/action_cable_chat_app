json.array!(@lines) do |line|
  json.extract! line, :id, :content, :text_id
  json.url line_url(line, format: :json)
end
