import React, {Component, PropTypes as t} from 'react';
import join from 'classnames';

export default class Button extends Component {
	static className = 'button';
	static containerClassName = 'button__container';
	static orders = ['primary', 'secondary'];

	static propTypes = {
		children: t.oneOfType([t.node, t.arrayOf(t.node)]),
		inverted: t.bool.isRequired,
		order: t.oneOf(Button.orders).isRequired,
		tagName: t.node.isRequired,
		type: t.string.isRequired
	};

	static defaultProps = {
		inverted: false,
		order: 'primary',
		tagName: 'button',
		type: 'button'
	}

	render() {
		const {
			children,
			inverted,
			order,
			tagName: TagName,
			type
		} = this.props;

		const className = join(
			Button.className,
			`${Button.className}--${order}`,
			{
				[`${Button.className}--inverted`]: inverted
			}
		);

		return (
			<TagName
				className={className}
				type={type}
			>
				<span className={Button.containerClassName}>
					{children}
				</span>
			</TagName>
		);
	}
}
