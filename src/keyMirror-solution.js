const sndArg = nthArg(1);

const keyMirror = mapObjIndexed(sndArg);

// const States = {
// 	ERROR: 'ERROR',
// 	SUCCESS: 'SUCCESS',
// };

console.log(keyMirror({ ERROR: null, SUCCESS: null }));

const duplicate = x => [x, x];
// const duplicate = repeat(__, 2)
// const duplicate = flip(repeat)(2);
const valueMirror = o(fromPairs, map(duplicate));

console.log(valueMirror(['ERROR', 'SUCCESS']));
