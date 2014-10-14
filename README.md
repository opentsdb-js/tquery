TSUID Query
============
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> [OpenTSDB](http://opentsdb.net) TSUID query factory.

OpenTSDB permits two query [types](/docs/build/html/api_http/query/index.html): _[metric](https://github.com/opentsdb-js/mquery)_ and _[tsuid](https://github.com/opentsdb-js/tquery)_.

Metric queries are general queries which return an indeterministic number of timeseries. OpenTSDB implements metric queries by searching for timeseries matching the metric criteria, e.g., `metric name` and `tag`.

TSUID queries request a specific timeseries having a unique id. Every timeseries has an assigned [unique identifier](http://opentsdb.net/docs/build/html/user_guide/backends/hbase.html#uid-table-schema), which is based on `metric name` and any `tags`.

This module provides a TSUID query generator.



### Install

For use in Node.js,

``` bash
$ npm install opentsdb-tquery
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


### Usage

To use the module,

``` javascript
var createQuery = require( 'opentsdb-tquery' );
```

To create a new TSUID query,

``` javascript
var tQuery = createQuery();
```

A TSUID query is configurable and has the following methods...


#### tQuery.aggregator( [aggregator] )

This method is a setter/getter. If no `aggregator` is provided, returns the query [aggregator](http://opentsdb.net/docs/build/html/api_http/aggregators.html). The default aggregator is `avg`. To set a different `aggregator`,

``` javascript
tQuery.aggregator( 'min' );
```


#### tQuery.downsample( [downsample] )

This method is a setter/getter. If no `downsample` function is provided, returns the configured `downsample` function. By default, downsampling is turned off (i.e., set to `null`). To specify a `downsample` function,

``` javascript
tQuery.downsample( '5s-avg' );
```


#### tQuery.rate( [bool] )

This method is a setter/getter. If no boolean flag is provided, returns the flag indicating whether to return the difference between consecutive data values. By default, the flag is `false`. To turn on difference calculation,

``` javascript
tQuery.rate( true );
```

Note that rate calculation requires a set of three options.



#### tQuery.rateOptions( [object] )

This method is a setter/getter. If no configuration object is provided, returns the rate options: `counter`, `counterMax`, `resetValue`. `counter` must be a boolean; `counterMax` must be numeric or `null`; and `resetValue` must be numeric.

By default,

``` javascript
var rateOptions = {
	"counter": false,
	"counterMax": null,
	"resetValue": 0
};
```

#### tQuery.tsuids( [tsuids] )

This method is a setter/getter. If no `tsuids` are provided, return the query `tsuids`. `tsuids` are __required__ to encode a tsuid query. To set `tsuids`,

``` javascript
tQuery.tsuids( '001,002,003' );
```


## Examples

``` javascript
var createQuery = require( 'opentsdb-tquery' );

var tQuery = createQuery();

tQuery
	.aggregator( 'sum' )
	.downsample( '5m-avg' )
	.rate( false )
	.tsuids( '001,002,003' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```



## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/opentsdb-tquery.svg
[npm-url]: https://npmjs.org/package/opentsdb-tquery

[travis-image]: http://img.shields.io/travis/opentsdb-js/tquery/master.svg
[travis-url]: https://travis-ci.org/opentsdb-js/tquery

[coveralls-image]: https://img.shields.io/coveralls/opentsdb-js/tquery/master.svg
[coveralls-url]: https://coveralls.io/r/opentsdb-js/tquery?branch=master

[dependencies-image]: http://img.shields.io/david/opentsdb-js/tquery.svg
[dependencies-url]: https://david-dm.org/opentsdb-js/tquery

[dev-dependencies-image]: http://img.shields.io/david/dev/opentsdb-js/tquery.svg
[dev-dependencies-url]: https://david-dm.org/dev/opentsdb-js/tquery

[github-issues-image]: http://img.shields.io/github/issues/opentsdb-js/tquery.svg
[github-issues-url]: https://github.com/opentsdb-js/tquery/issues