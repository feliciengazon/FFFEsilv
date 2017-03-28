var Nightmare = require('nightmare'),
  nightmare = Nightmare({
    show: true
});

try {
    await nightmare
      .goto('https://www.fff.fr/?popin=login');
      .wait('#username')
      .wait(50)
      .insert('#username','felicien.gazon@gmail.com');
      .insert('#password','Mpby78370lur');
      .wait(50)
      .click("#_submit");
      .goto('https://www.fff.fr/myfff/designations');
  } catch(e) {
    console.error(e);
}
