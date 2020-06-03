import * as R from 'ramda';
import * as R_ from 'ramda-extension';

global.log = console.log;
//
// NOT RECOMMENDED! Using just for webinar
//
for (const x in R) {
	global[x] = R[x];
}
for (const x in R_) {
	global[x] = R_[x];
}
