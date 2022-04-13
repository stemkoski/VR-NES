class NESAudioProcessor extends AudioWorkletProcessor 
{
    constructor()
    {
        super();
        
        this.AUDIO_BUFFERING = 128;
        this.SAMPLE_COUNT = 4096;
        this.SAMPLE_MASK = this.SAMPLE_COUNT - 1;
        this.audio_samples_L = new Float32Array(this.SAMPLE_COUNT);
        this.audio_samples_R = new Float32Array(this.SAMPLE_COUNT);
        this.audio_write_cursor = 0;
        this.audio_read_cursor = 0;

        let self = this;

        this.port.onmessage = function(event)
        {
            self.audio_samples_L[self.audio_write_cursor] = event.data.left;
            self.audio_samples_R[self.audio_write_cursor] = event.data.right;
            self.audio_write_cursor = (self.audio_write_cursor + 1) & self.SAMPLE_MASK;
        }
  }

  process (inputs, outputs, parameters) 
  {
    // attempt to avoid buffer underruns; exit early if there is not enough audio data available
    if( ((this.audio_write_cursor - this.audio_read_cursor) & this.SAMPLE_MASK) < this.AUDIO_BUFFERING ) 
        return true;

    const output = outputs[0];
    const channel = output[0];
    for (let i = 0; i < channel.length; i++) // length is usually 128
    {
        // output (play) the buffers
        const src_idx = (this.audio_read_cursor + i) & this.SAMPLE_MASK;
        channel[i] = this.audio_samples_L[src_idx];
    }

    this.audio_read_cursor = (this.audio_read_cursor + channel.length) & this.SAMPLE_MASK;
    // always return true so that AudioContext keeps playing!
    return true;
  }
}

registerProcessor('nes-audio-processor', NESAudioProcessor)
