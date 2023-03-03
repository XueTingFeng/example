const jsdom = require('jsdom')
const { JSDOM } = jsdom

const dom = new JSDOM('<!DOCTYPE html><head/><body></body>', {
    url: 'http://localhost/',
    referrer: 'https://example.com/',
    contentType: 'text/html',
    userAgent: 'Mellblomenator/9000',
    includeNodeLocations: true,
    storageQuota: 10000000,
  })