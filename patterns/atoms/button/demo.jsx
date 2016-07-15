/* eslint-disable no-unused-expressions,semi */
import React from 'react';
import Pattern from 'Pattern';

<div>
	<div id="primary" className="pp-demo">
		<div className="pp-demo__container">
			<Pattern>Primary</Pattern>
		</div>
		<div className="pp-demo__container pp-demo__container--inverted">
			<Pattern inverted>Primary inverted</Pattern>
		</div>
	</div>
	<div id="secondary" className="pp-demo">
		<div className="pp-demo__container">
			<Pattern order="secondary">Secondary</Pattern>
		</div>
		<div className="pp-demo__container pp-demo__container--inverted">
			<Pattern order="secondary" inverted>Secondary inverted</Pattern>
		</div>
	</div>
</div>
