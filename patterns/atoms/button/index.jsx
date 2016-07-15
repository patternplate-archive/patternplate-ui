const React = require('react');
const Icon = require('icon');
const classnames = require('classnames');

export class Button extends React.Component {
	static propTypes = {
		inactive: React.PropTypes.bool,
		className: React.PropTypes.string,
		type: React.PropTypes.string,
		htmlType: React.PropTypes.string,
		icon: React.PropTypes.string || React.PropTypes.element,
		iconLeft: React.PropTypes.string || React.PropTypes.element,
		iconRight: React.PropTypes.string || React.PropTypes.element,
		text: React.PropTypes.string,
		children: React.PropTypes.array || React.PropTypes.element,
		id: React.PropTypes.string,
		htmlFor: React.PropTypes.string,
		component: React.PropTypes.string,
		href: React.PropTypes.string,
		style: React.PropTypes.string
	};

	// static defaultProps = {
	// 	type: 'primary',
	// 	iconRight: this.props.iconRight || this.props.icon,
	// 	component: 'a',
	// 	href: (this.props.component === 'a') ? '#' : undefined
	// };

	render() {
		return (
			<button>
				Foo
			</button>
		);
		/* const iconOnly = (
			this.props.icon ||
			this.props.iconLeft ||
			this.props.iconRight) && !this.props.text && !this.props.children;

		const cls = classnames(
			this.props.className,
			'button',
			this.props.inactive ? 'inactive' : 'active',
			`type-${type}`,
			iconOnly && 'type-icon-only'
		);
		const Component = component; // for jsx!

		<Component type={ this.props.htmlType } href={ this.props.href } id={ this.props.id } className={ cls } style={ this.props.style } htmlFor={ this.props.htmlFor }>
			{ this.props.iconLeft && (typeof this.props.iconLeft === 'string' ? <Icon name={ this.props.iconLeft } /> : this.props.iconLeft) }
			{ this.props.text && <span className="text">{ this.props.text }</span> }
			{ this.props.iconRight && (typeof this.props.iconRight === 'string' ? <Icon name={ this.props.iconRight } /> : this.props.iconRight) }
			{ this.props.children }
		</Component> */
	}
}
