import React from 'react';
import styles from 'style://Pattern';

console.log(styles);
const Component = this.props.component || 'button';

<Component type={this.props.type || 'button'}>
	{this.props.children || 'Button'}
</Component>
