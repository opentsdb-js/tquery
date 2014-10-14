var createQuery = require( './../lib' );

var tQuery = createQuery();

tQuery
	.aggregator( 'sum' )
	.downsample( '5m-avg' )
	.rate( false )
	.tsuids( '001,002,003' );

// Demonstrate that the internal parameters have been set:
console.log( tQuery );