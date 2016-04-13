var classnames = require('classnames');

let {
	size = 24,
	height,
	width,
	name = 'arrow-right',
	file = '/api/static/icons.svg',
	className
} = this.props;

height = height || size;
width = width || size;

var innerHTML = {__html: `<use xlink:href="${file}#${name}" width="100%" height="100%" fill="currentColor"></use>`};

var cls = classnames(
	'icon',
	name,
	className
);

<svg className={cls} width={width} height={height} dangerouslySetInnerHTML={innerHTML}></svg>
