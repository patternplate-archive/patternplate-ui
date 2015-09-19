let name = this.props.colorName;
let nameSave = name && name.split(' ').join('-').toLowerCase();

<div className={"color-swatch " + nameSave} title={name}>
	<div className="code"></div>
	<div className="name">{name}</div>
</div>
