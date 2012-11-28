/**
 * HTML5 placeholder fallback.
 *
 * @author  Tristan Lins <tristan.lins@bit3.de>
 * @link    http://bit3.de
 * @licence http://creativecommons.org/publicdomain/zero/1.0/ CC-0
 * @require jQuery
 */

function replacePlaceholder() {
	// break if native input element has the attribute placeholder
	var i = document.createElement('input');
	if ('placeholder' in i) {
		return;
	}
	$$('input[placeholder], textarea[placeholder]').each(function(i) {
		$(i.form).submit(function() {
			if (i.attr('value') == i.attr('placeholder')) {
				i.attr('value', '');
			}
		});
		if (!i.attr('value')) {
			i.attr('value', i.attr('placeholder'));
		}
		i.bind({
			focus: function() {
				if (this.get('value') == this.get('placeholder'))
				{
					this.set('value', '');
				}
			},
			blur: function() {
				if (this.get('value') == '')
				{
					this.set('value', this.get('placeholder'));
				}
			}
		});
	});
}
$(document).ready(function() {
	replacePlaceholder();
});
