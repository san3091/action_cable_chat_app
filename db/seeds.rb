User.transaction do
  User.create!(username: "alice", password: "wonderland")
  User.create!(username: "bob",   password: "asdfasdf")

  sonnet_text = "Let me not to the marriage of true minds\nadmit impediments. Love is not love\nwhich alters when it alteration finds\nor bends with the remover to remove."
  # byebug
  sonnet = Text.create!(title: "Shakespearean Sonnet")
  sonnet_text.split("\n").each_with_index do |line_text, line_number| 
    # byebug
    line = Line.new(content: line_text, line_number: line_number + 1)
    sonnet.lines << line
    line.save!
  end
end