# VR-NES
NES emulation in VR

<p align="center">
<img src="https://raw.githubusercontent.com/stemkoski/VR-NES/main/vr-nes.jpg" width="480">
</p>

This page contains examples of NES (Nintendo Entertainment System) emulation using Javascript. All the examples are based on the JSNES project (<a href="https://github.com/bfirsh/jsnes">GitHub</a>), maintained by Ben Firshman.
</p>

<p>
Special thanks to Xem and the JSNES-lite project (<a href="https://github.com/xem/jsnes-lite">GitHub</a>, <a href="https://twitter.com/MaximeEuziere/status/1316455403274858501">Twitter</a>, <a href="https://xem.github.io/articles/nes.html">blog</a>), who is working hard to make NES emulators easier to understand and easier to use for everyone!
</p>

<p>
There are multiple variations available below. Some consist of a canvas on a webpage; others have been integrated with three.js (<a href="https://threejs.org/">website</a>, <a href="https://github.com/mrdoob/three.js/">GitHub</a>) and A-Frame (<a href="https://aframe.io/">website</a>, <a href="https://github.com/aframevr/aframe">GitHub</a>). Some use a <a href="https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode">ScriptProcessorNode</a> to process the audio (which has been deprecated); others have been updated to use <a href="https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet">AudioWorklets</a>. 
</p>

<p>
Performance varies greatly between browsers. Based on my own informal, recent tests:
<ul>
<li> Google Chrome and Microsoft Edge seem to have the best performance.
<li> Mozilla Firefox seems to have significantly worse performance.
<li> Having the Javascript console open may negatively impact performance, particularly for the 3D environment using an AudioWorker.
<li> On the Oculus Quest browser, the VR ScriptProcessor performance is much better than the VR AudioWorklet performance. 
	<br/> The ScriptProcessor lags on Quest 2 (and moreso on Quest 1), but is still playable.
	<br/> There is also an audio-free VR version available, to maximize performance.
</ul>
</p>

NES controls:
<p>
<ul>
	<li>Desktop browsers:
	<ul>
		<li>press any key to start the emulator
		<li>Direction pad: Arrow keys
		<li>A button: C key
		<li>B button: X key
		<li>Select button: Space key
		<li>Start button: Enter key
	</ul>
	<li>Quest browser:
	<ul>
		<li>emulator starts when you enter VR mode
		<li>Direction pad: joystick (left controller)
		<li>A button: A button (right controller)
		<li>B button: B button (right controller)
		<li>Select button: Y button (left controller)
		<li>Start button: X button (left controller)
	</ul>
</ul>
</p>

<p>VR scene movement controls:
<ul>
	<li>Desktop browsers:
	<ul>
		<li>W/A/S/D: move forward/left/backward/right
		<li>Q/E: turn left/right
		<li>R/F: move up/down
		<li>T/G: look up/down 
	</ul>
	<li>Quest browser:
	<ul>
		<li>left controller: while holding grip button, use joystick to move <br/>
			forward/backward/left/right; hold trigger to move faster. <br/>
		<li>right controller: use joystick left/right to turn left/right 45 degrees; <br/>
			while holding grip button, use joystick up/down to move up/down
	</ul>
</ul>
</p>

<p>
Emulator examples:
<ul>
	<li><a href="https://stemkoski.github.io/VR-NES/desktop-original.html?file=LJ65">canvas only; audio via ScriptProcessor</a></li>
	<li><a href="https://stemkoski.github.io/VR-NES/desktop-audioworklet.html?file=LJ65">canvas only; audio via AudioWorklet</a></li>
	<li><a href="https://stemkoski.github.io/VR-NES/vr-mute.html?file=LJ65">3D environment; no audio processing</a></li>
	<li><a href="https://stemkoski.github.io/VR-NES/vr-original.html?file=LJ65">3D environment; audio via ScriptProcessor</a></li>
	<li><a href="https://stemkoski.github.io/VR-NES/vr-audioworklet.html?file=LJ65">3D environment; audio via AudioWorklet</a></li>
</ul>
</p>

<p>
The included sample NES game, LJ65 (similar to Tetris), was created by Damian Yerrick. For additional information, <a href="roms/LJ65-README.txt">click here</a>.
</p>

<p>
If you download the code from GitHub and you want to run these files locally (to try out other ROM files, for example), 
this code must run through a web server. 
One simple way to create your own local server is to download <a href="https://www.python.org/">Python</a>, and run the included Python script from this repository.
A console window should appear containing text similar to "Serving HTTP on port 8000".
Then, in a web browser, enter the URL <b><tt>localhost:8000</tt></b>, and you should see a copy of this page. 
You can load custom ROM files using the <i>file</i> parameter in the URL.
</p>
