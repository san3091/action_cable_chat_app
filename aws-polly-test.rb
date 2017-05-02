require 'aws-sdk'

module Clients
  module Amazon
    class Polly
      attr_reader :client

      def initialize
        @client = Aws::Polly::Client.new(
          access_key_id: 'AKIAJ35K3P3ODAESMFKQ',
          secret_access_key: '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'
        )
      end

      def speak(text, output_filename = nil)
        response = client.synthesize_speech(
          text: text,
          voice_id: "Joanna",
          output_format: "mp3"
        )

        tmp_filename ||= SecureRandom.uuid

        mp3 = File.new("#{tmp_filename}.mp3")
        mp3.write response.audio_stream.read
        mp3.close
      end

    end
  end
end

text = "Let me not to the marriage of true minds admit impediments. Love is not love which alters when it alteration finds, or bends with the remover to remove."
@polly = Clients::Amazon::Polly.new

wav = @polly.speak text

