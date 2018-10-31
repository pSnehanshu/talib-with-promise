# talib-with-promise
Promised based wrapper for Node.js Technical Analysis Library (https://github.com/oransel/node-talib)

talib promisify module

```javascript
const talib = require('talib-with-promise');

talib.execute({
	name: "SMA",
	startIdx: 0,
	endIdx: marketData.close.length - 1,
	inReal: marketData.close,
	optInTimePeriod: 9
}).then(function(data) {
	// data ready here
}).catch ( function (err){
	// catch error exception here
}) ;
```

