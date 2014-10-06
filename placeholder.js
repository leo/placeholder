/*
	Placeholder 2
	Copyright by Leonard Lamprecht - https://github.com/leo/placeholder
	License: http://opensource.org/licenses/mit-license.php
*/

window.onload = function() {

	if( window.navigator.userAgent.indexOf('MSIE ') > 0 ) {

		var mainSlug = 'placeholder', dataSlug = 'data-' + mainSlug;
		var items = document.querySelectorAll( '[' + mainSlug + ']' );

		for ( var i = 0; i < items.length; i++ ) {

			var item = items[i];

			function addClass(what) {

				if ( what.className == '' ) {
					what.className = mainSlug + '-on';
				} else {
					what.className = what.className + ' ' + mainSlug + '-on';
				}

			}

			function form() {

				while ( item.parentNode ) {

					par = item.parentNode;

					if ( par.tagName === 'FORM' ) {
						return par;
					}

					return null;

				}

			}

			item.value = item.getAttribute( mainSlug );
			item.removeAttribute( mainSlug );
			item.setAttribute( dataSlug, item.value );

			addClass( item );

			item.onfocus = function() {

				var ph = this.getAttribute( dataSlug ), cl = this.className;

				if ( cl.indexOf( ' ' ) > -1 ) {
					var cl = cl.replace( mainSlug + '-on', '' );
				} else {
					this.removeAttribute( 'class' );
				}

				if( this.value == ph || this.getAttribute( 'value' ) == ph ) {
					this.value = '';
				}

				this.onblur = function() {

					if( this.value.length == 0 ) {
						addClass( this );
						this.value = this.getAttribute( dataSlug );
					}

				};

			};

			if( form() ) {

				form().onsubmit = function() {

					var inputs = this.querySelectorAll( '[' + dataSlug + ']' );

					for( var i = 0; i < inputs.length; i++ ) {

						if( inputs[i].value == inputs[i].getAttribute( dataSlug ) ) {
							inputs[i].value = '';
						}

					}

					return true;

				};

			}

		}

	}

}
