import Icon, {symbols} from 'Pattern';

<div>
	{symbols.map((symbol, index) => <Icon key={index} symbol={symbol}/>)}
</div>
