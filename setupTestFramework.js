// NOTES: Why does this exist?
//
// I configured this in package.json... but ended up including at top of tests file
// because it wasn't working.

require.requireActual('react-native/jest/setup');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
enzyme.configure({ adapter: new Adapter() });
