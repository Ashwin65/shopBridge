
const scanner = require('sonarqube-scanner');
scanner(
  {
  serverUrl: "http://localhost:9000",
  options: {
    "sonar.sources":"src",
    "sonar.login":"admin",
    "sonar.password":"admin123",
    "sonar.exclusions": "**/node_modules/**,**/coverage/**",
"sonar.tests": "./src",
"sonar.test.inclusions": "**/*.test.js,**/*.test.jsx,**/*.test.tsx",
"sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
"sonar.projectKey":"shop_bridge"
  },
},
() => process.exit()
);