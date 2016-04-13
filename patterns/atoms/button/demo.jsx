<div>
	<table>
		<tr><th colSpan="3">Content</th></tr>

		<tr>
			<td><code>text</code> attribute</td>
			<td><Pattern text="Custom text" /></td>
		</tr>

		<tr>
			<td>Pattern children</td>
			<td><Pattern>Custom content</Pattern></td>
		</tr>

		<tr>
			<td><code>iconLeft</code> and <code>text</code> attributes</td>
			<td><Pattern iconLeft="patternplate" text="Text after icon" /></td>
		</tr>

		<tr>
			<td><code>iconRight</code> and <code>text</code> attributes</td>
			<td><Pattern iconRight="patternplate" text="Icon after text" /></td>
		</tr>

		<tr>
			<td>Special case: icon only</td>
			<td>
				<Pattern icon="patternplate" />
				<Pattern type="secondary" icon="patternplate" />
			</td>
		</tr>

		<tr><th colSpan="3">Inactive</th></tr>

		<tr>
			<td><code>inactive={'{true}'}</code></td>
			<td><Pattern text="Button" inactive={true} /> <Pattern text="Button" inactive={true} type="secondary"/> <Pattern text="Button" inactive={true} type="text"/></td>
		</tr>

		<tr><th colSpan="3">Types</th></tr>

		<tr>
			<td><code>type="primary"</code></td>
			<td><Pattern text="Button" type="primary"/></td>
		</tr>

		<tr>
			<td><code>type="secondary"</code></td>
			<td><Pattern text="Button" type="secondary"/></td>
		</tr>

		<tr>
			<td><code>type="bright"</code></td>
			<td><Pattern text="Button" type="bright"/></td>
		</tr>

		<tr>
			<td><code>type="text"</code></td>
			<td><Pattern text="Button" type="text"/></td>
		</tr>

		<tr>
			<td><code>type="text" with iconLeft</code></td>
			<td><Pattern iconLeft="patternplate" text="Button" type="text"/></td>
		</tr>
	</table>
</div>
