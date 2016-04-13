import * as React from 'react';
import classNames from 'classnames';

export default class Colorswatch extends React.Component {
	static propTypes = {
		className: React.PropTypes.string,
		color: React.PropTypes.string
	}

	render() {
		const className = classNames(this.props.className, this.props.color);
		const name = this.props.color;
		return (
			<li
				className={className}
				data-colorname={name}
				title={name}
				/>
		);
	}
}
