console.log(data);

if (data.op == 'check') {
  $('tr[name="[' + data.row + ']"] input[name="[' + data.col + ']"]' ).attr( 'checked', true);
} else {
  $('tr[name="[' + data.row + ']"] input[name="[' + data.col + ']"]' ).attr( 'checked', false);
}
