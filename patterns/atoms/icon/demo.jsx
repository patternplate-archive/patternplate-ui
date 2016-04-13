var icons = 'home globals atoms molecules modules pages'.split(' ');

<ul className="demo-icons">
	{icons.map(function(icon) {
		return <li title={icon}>
			<Pattern name={icon} size={48}></Pattern>
			<span className="icon-name">{icon}</span>
		</li>;
	})}
</ul>
