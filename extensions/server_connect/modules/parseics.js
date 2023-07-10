// JavaScript Document
exports.parseics = function (icspath) {
    // import ical
    const ical = require('node-ical');
    ical.fromURL('https://calendar.google.com/calendar/ical/bellinghamoldchapel%40gmail.com/public/basic.ics', {}, function (err, data) {
        console.log(ical);
        for (let k in data) {
            if (data.hasOwnProperty(k)) {
                const ev = data[k];
                if (data[k].type == 'VEVENT') {
                    console.log(`${ev.summary} is in ${ev.location} on the ${ev.start.getDate()} of ${months[ev.start.getMonth()]} at ${ev.start.toLocaleTimeString('en-GB')}`);
                }
            }
        }
    });
    console.log(ical);
}
